"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("@shared/utils/environment");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const tmpfolder = path_1.default.resolve(__dirname, '..', '..', 'temp');
exports.default = {
    driver: environment_1.STORAGE_DRIVER,
    tmpfolder,
    uploadsFolder: path_1.default.resolve(tmpfolder, 'uploads'),
    multer: {
        storage: multer_1.default.diskStorage({
            destination: tmpfolder,
            filename(request, file, callback) {
                const fileHash = crypto_1.default.randomBytes(16).toString('hex');
                const fileName = `${fileHash}-${file.originalname}`;
                return callback(null, fileName);
            },
        }),
    },
};
