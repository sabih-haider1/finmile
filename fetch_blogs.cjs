const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '/Users/sabihhaider/Documents/Finmile/.env' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function testFetch() {
  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, cover_image_url')
    .order('created_at', { ascending: false })
    .limit(3);
  console.log('Fetch result:', JSON.stringify({ data, error }, null, 2));
}

testFetch();
