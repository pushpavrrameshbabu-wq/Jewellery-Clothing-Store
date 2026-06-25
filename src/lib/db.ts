import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, {
  // require SSL in production environments
  ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
  connect_timeout: 30,
  // sensible default pool size; can be overridden with env `PG_MAX_POOL`
  max: Number(process.env.PG_MAX_POOL) || 5,
  idle_timeout: 20,
  prepare: false,
  debug: process.env.NODE_ENV !== "production" ? (connection, query, parameters, parameterTypes) => {
    console.log("PG DEBUG QUERY:", query);
    console.log("PG DEBUG PARAMS:", parameters);
    console.log("PG DEBUG TYPES:", parameterTypes);
  } : undefined,
});

export default sql;
