# Conserje API Server

Backend Express API para o projeto Conserje. Feito para deploy no Railway.

## Variáveis de ambiente necessárias

| Variável | Descrição |
|---|---|
| `PORT` | Porta do servidor (Railway define automaticamente) |
| `DATABASE_URL` | Connection string do PostgreSQL (Supabase) |
| `NODE_ENV` | Ambiente (`production` recomendado no Railway) |

## Deploy no Railway

1. Crie um novo projeto no Railway e aponte para este repositório
2. Adicione a variável `DATABASE_URL` com a connection string do Supabase
3. O Railway usará o `nixpacks.toml` para build automático
4. O servidor sobe na porta definida por `PORT`

## Rotas disponíveis

- `GET /api/healthz` — health check

## Desenvolvimento local

```bash
npm install
npm run dev
```
