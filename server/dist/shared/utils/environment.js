"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAIL_FROM = exports.MAIL_PASS = exports.MAIL_USER = exports.MAIL_DRIVER = exports.AWS_S3_BUCKET = exports.AWS_S3_BUCKET_URL = exports.STORAGE_DRIVER = exports.DB_HOST = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = exports.APP_WEB_URL = exports.APP_API_URL = exports.APP_NAME = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const path = `${__dirname}/../../../.env`;
dotenv.config({ path });
exports.APP_NAME = process.env.APP_NAME;
exports.APP_API_URL = process.env.APP_API_URL;
exports.APP_WEB_URL = process.env.APP_WEB_URL;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.DB_HOST = process.env.DB_HOST;
exports.STORAGE_DRIVER = process.env.STORAGE_DRIVER;
exports.AWS_S3_BUCKET_URL = process.env.AWS_S3_BUCKET_URL;
exports.AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
exports.MAIL_DRIVER = process.env.MAIL_DRIVER;
exports.MAIL_USER = process.env.MAIL_USER;
exports.MAIL_PASS = process.env.MAIL_PASS;
exports.MAIL_FROM = process.env.MAIL_FROM;
