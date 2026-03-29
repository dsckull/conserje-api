import { pool } from "./db";
import { logger } from "./logger";

export async function runMigrations() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS interaction_logs (
        id SERIAL PRIMARY KEY,
        morador_id INTEGER DEFAULT 0,
        tipo_msg TEXT NOT NULL,
        acao TEXT NOT NULL,
        perfil_emocional TEXT NOT NULL,
        resultado TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      )
    `);
    logger.info("Migrations concluidas com sucesso");
  } catch (err) {
    logger.error({ err }, "Erro ao executar migrations");
    throw err;
  } finally {
    client.release();
  }
}
