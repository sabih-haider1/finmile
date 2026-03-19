const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '/Users/sabihhaider/Documents/Finmile/.env' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function testUpdate() {
  const { data, error } = await supabase
    .from('blogs')
    .update({ cover_image_url: 'https://viljcqshhlfkqnjuetmo.supabase.co/storage/v1/object/public/blog-covers/covers/test_image.jpg', updated_at: new Date().toISOString() })
    .eq('id', 'fc26d8d4-f999-4c9b-a844-fcc64fcdf144')
    .select();
  console.log('Service role update result:', JSON.stringify({ data, error }, null, 2));
}
testUpdate();
