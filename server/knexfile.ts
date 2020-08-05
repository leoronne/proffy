import path from 'path';

require('dotenv/config');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'infra', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'infra', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },
};
