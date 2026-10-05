export type AuthMode = "preview" | "supabase";
export function getAuthMode(env:Record<string,string|undefined>=process.env):AuthMode {
 return env.NEXT_PUBLIC_SUPABASE_URL && env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "supabase" : "preview";
}
