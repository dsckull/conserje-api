import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const logsTable = pgTable("interaction_logs", {
  id: serial("id").primaryKey(),
  morador_id: integer("morador_id").default(0),
  tipo_msg: text("tipo_msg").notNull(),
  acao: text("acao").notNull(),
  perfil_emocional: text("perfil_emocional").notNull(),
  resultado: text("resultado").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
