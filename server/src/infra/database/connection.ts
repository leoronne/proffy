/* eslint-disable @typescript-eslint/no-var-requires */
import knex from 'knex';

const configuration = require('../../../knexfile');

require('dotenv/config');

const config = process.env.DBAMBIENT === 'production' ? configuration.production : configuration.development;

const connection = knex(config);

export default connection;
