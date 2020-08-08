"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const mime_1 = __importDefault(require("mime"));
const upload_1 = __importDefault(require("@config/upload"));
const environment_1 = require("@shared/utils/environment");
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class S3StorageProvider {
    constructor() {
        this.client = new aws_sdk_1.default.S3({
            region: 'us-east-1',
        });
    }
    async saveFile(file) {
        const originalPath = path_1.default.resolve(upload_1.default.tmpfolder, file);
        const fileContent = await fs_1.default.promises.readFile(originalPath, {
            encoding: null,
        });
        const fileType = mime_1.default.getType(originalPath);
        if (!fileType) {
            throw new AppError_1.default('File does not exists', 500);
        }
        await this.client
            .putObject({
            Bucket: environment_1.AWS_S3_BUCKET || 'go-barber-ronne',
            Key: file,
            ACL: 'public-read',
            ContentType: fileType,
            Body: fileContent,
        })
            .promise();
        await fs_1.default.promises.stat(originalPath);
        await fs_1.default.promises.unlink(originalPath);
        return file;
    }
    async deleteFile(file) {
        await this.client
            .deleteObject({
            Bucket: environment_1.AWS_S3_BUCKET || 'go-barber-ronne',
            Key: file,
        })
            .promise();
    }
}
exports.default = S3StorageProvider;
