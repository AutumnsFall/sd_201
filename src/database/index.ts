import mysql from 'mysql2/promise';
import config from './config.ts';

export const connection = await mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB,
});
