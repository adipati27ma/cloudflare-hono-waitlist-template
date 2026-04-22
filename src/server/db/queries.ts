import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db";
import { subscribers, type NewSubscriber } from "./schema";

export const addSubscriber = async (
  d1Database: D1Database,
  newSubscriber: NewSubscriber,
) => {
  const drizzleDb = getDb(d1Database);
  const [result] = await drizzleDb
    .insert(subscribers)
    .values(newSubscriber)
    .returning();
  return result;
};

export const getSubscribers = async (d1Database: D1Database) => {
  const drizzleDb = getDb(d1Database);
  return await drizzleDb.select().from(subscribers).all();
};
