import { defineConfig } from "drizzle-kit";
// Import environment variables to be sure that they are loaded
import { env } from "~/env";

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["borsch-drive_*"],
  dbCredentials: {
    host: env.SINGLESTORE_HOST,
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USER,
    password: env.SINGLESTORE_PASS,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},
  },
});
