const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '/Users/sabihhaider/Documents/Finmile/.env' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testUpdate() {
  const { data, error } = await supabase
    .from('blogs')
    .update({ cover_image_url: 'https://test.com/img.jpg' })
    .eq('id', 'fc26d8d4-f999-4c9b-a844-fcc64fcdf144')
    .select();
  console.log('Update result:', JSON.stringify({ data, error }, null, 2));
}

testUpdate();
