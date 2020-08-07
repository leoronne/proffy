"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const knex_1 = __importDefault(require("knex"));
const configuration = require('../../knexfile');
require("dotenv/config");
const config = process.env.DBAMBIENT === 'production' ? configuration.production : configuration.development;
const connection = knex_1.default(config);
exports.default = connection;
