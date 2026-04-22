import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

export const getTestDb = () => {
  // just connect to the existing sqlite, because already created by create-test-db.ts
  const sqlite = new Database("test.sqlite");
  return drizzle(sqlite);
};
