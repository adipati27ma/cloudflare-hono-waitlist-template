import { Hono } from "hono";
import { accessAuth } from "./middleware/auth";
const app = new Hono();

// running locally using Wrangler (simulate running in Cloudflare Workers)
// Wrangler need configuration file
// Wrangler also can be used to deploy the app to Cloudflare Workers
app.use(accessAuth).get("/api/health", (c) => c.json("Healthy!🔥"));

export default app;
