// import { getSupabaseClient } from '@supabase/supabase-js';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//     const requestUrl = new URL(request.url);
//     const code = requestUrl.searchParams.get('code');

//     if (code) {
//         const cookieStore = cookies();
//         const supabase = getSupabaseClient({cookies: () => cookieStore});
//         await supabase.auth.getSessionFromCode(code);
//     }

//     return NextResponse.redirect(requestUrl.origin);
// }
