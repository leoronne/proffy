"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@config/upload"));
class DiskStorageProvider {
    async saveFile(file) {
        await fs_1.default.promises.rename(path_1.default.resolve(upload_1.default.tmpfolder, file), path_1.default.resolve(upload_1.default.uploadsFolder, file));
        return file;
    }
    async deleteFile(file) {
        const filePath = path_1.default.resolve(upload_1.default.uploadsFolder, file);
        try {
            await fs_1.default.promises.stat(filePath);
        }
        catch (err) {
            return;
        }
        await fs_1.default.promises.unlink(filePath);
    }
}
exports.default = DiskStorageProvider;
