import pool from "@/lib/db";

export async function findUserByEmail(email: string) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM User WHERE email = ? LIMIT 1",
      [email]
    );

    const users = rows as any[];
    return users.length ? users[0] : null;
  } catch (err) {
    console.error("DB error:", err);
    throw err;
  }
}
