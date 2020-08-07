import knex from 'knex';
import 'dotenv/config';
declare const connection: knex<any, unknown[]>;
export default connection;
