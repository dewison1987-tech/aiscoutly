import { createClient } from "@supabase/supabase-js";

// 环境变量在 Vercel / .env.local 中配置（参考 nextjs-site-setup.md 第 5 节）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
