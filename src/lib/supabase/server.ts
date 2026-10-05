import{createServerClient}from"@supabase/ssr";
type CookieToSet={name:string;value:string;options?:Record<string,unknown>};
type CookieStore={getAll:()=>{name:string;value:string}[];setAll?:(cookies:CookieToSet[])=>void};
export function createSupabaseServerClient(cookieStore:CookieStore){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)return null;return createServerClient(url,key,{cookies:{getAll:()=>cookieStore.getAll(),setAll:(items:CookieToSet[])=>cookieStore.setAll?.(items)}});}
