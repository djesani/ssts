import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogzgvpqnjbjzxjsvscjh.supabase.co';
const supabaseKey = 'sbp_e148bf7cabab5261a474d4df0ae50ee45691546d';
const supabase = createClient(supabaseUrl, supabaseKey);

supabase
  .channel('any')
  .on('broadcast', { event: 'cursor-pos' }, payload => {
    console.log('Cursor position received!', payload)
  })
  .subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      channel.send({
        type: 'broadcast',
        event: 'cursor-pos',
        payload: { x: Math.random(), y: Math.random() },
      })
    }
  })