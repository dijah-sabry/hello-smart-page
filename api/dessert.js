const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADMIN_SECRET = process.env.ADMIN_SECRET;

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const secret = req.headers['x-admin-secret'] || req.query.secret;
    if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { data, error } = await supabase
      .from('failed_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'POST') {
    const { dessert } = req.body;

    if (!dessert || dessert.trim() === '') {
      return res.json({ result: 'empty', message: 'Please enter a dessert!' });
    }

    const input = dessert.toLowerCase().trim();
    const favoriteDessert = 'tiramisu';

    if (input === favoriteDessert) {
      return res.json({ result: 'success', message: 'wow, yeah tiramisu is so good.' });
    }

    const { error } = await supabase
      .from('failed_submissions')
      .insert([{ dessert: input }]);
    if (error) return res.status(500).json({ error: error.message });

    return res.json({ result: 'fail', message: `Nah. ${input} sucks.` });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
