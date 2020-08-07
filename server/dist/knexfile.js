"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
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
            directory: path_1.default.resolve(__dirname, 'src', 'infra', 'database', 'migrations'),
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
            directory: path_1.default.resolve(__dirname, 'src', 'infra', 'database', 'migrations'),
        },
        useNullAsDefault: true,
    },
};
