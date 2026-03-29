import { Router, type IRouter } from "express";
import { z } from "zod";
import { db } from "../lib/db";
import { logsTable } from "../schema";

const router: IRouter = Router();

const LogSchema = z.object({
  morador_id: z.number().optional().default(0),
  tipo_msg: z.string(),
  acao: z.string(),
  perfil_emocional: z.string(),
  resultado: z.string(),
});

router.post("/logs", async (req, res) => {
  try {
    const data = LogSchema.parse(req.body);
    const [log] = await db.insert(logsTable).values(data).returning();
    res.status(201).json(log);
  } catch (err) {
    req.log.error({ err }, "Erro ao salvar log");
    res.status(400).json({ error: "Dados invalidos" });
  }
});

router.get("/logs", async (req, res) => {
  try {
    const logs = await db.select().from(logsTable);
    res.json(logs);
  } catch (err) {
    req.log.error({ err }, "Erro ao buscar logs");
    res.status(500).json({ error: "Erro interno" });
  }
});

export default router;
