import mariadb from 'mariadb';

export const pool = mariadb.createPool({
    host: process.env.DB_HOSTNAME || 'teseo-database-service',
    port: (process.env.DB_HOSTPORT as unknown as number) || 3306,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5,
});
