import { createClient } from '@supabase/supabase-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _client: any = null;

export function getSupabaseAdmin() {
    if (!_client) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!supabaseUrl || !supabaseServiceKey) {
            throw new Error('NEXT_PUBLIC_SUPABASE_URL ve SUPABASE_SERVICE_ROLE_KEY env değişkenleri gerekli');
        }

        _client = createClient(supabaseUrl, supabaseServiceKey, {
            db: { schema: 'atasa_kurumsal_blog' },
        });
    }

    return _client;
}
