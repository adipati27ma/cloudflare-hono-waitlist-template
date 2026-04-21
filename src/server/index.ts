import { Hono } from "hono";
const app = new Hono();

// running locally using Wrangler (simulate running in Cloudflare Workers)
// Wrangler need configuration file
app.get("/api/health", (c) => c.json("Healthy!🔥"));

export default app;
