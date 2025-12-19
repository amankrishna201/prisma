import mysql from "mysql2/promise";

declare global {
  // eslint-disable-next-line no-var
  var mysqlPool: mysql.Pool | undefined;
}

const pool =
  global.mysqlPool ??
  mysql.createPool({
    uri: process.env.DATABASE_URL!,
    waitForConnections: true,
    connectionLimit: 5,
  });

if (!global.mysqlPool) {
  global.mysqlPool = pool;
}

export default pool;
