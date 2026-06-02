// ไฟล์: src/lib/supabase.js



import { createClient } from '@supabase/supabase-js';



// ดึงรหัสผ่านจาก .env แค่ที่เดียว

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;

const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;



// 🌟 จุดสำคัญ: สร้างตัวเชื่อมต่อ และใส่คำว่า 'export' ไว้ข้างหน้า

// เพื่อประกาศว่า "ใครอยากใช้ Database ให้มาเรียกตัวแปร supabase นี้นะ!"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);