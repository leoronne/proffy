"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const celebrate_1 = require("celebrate");
const upload_1 = __importDefault(require("@config/upload"));
const UserController_1 = __importDefault(require("@modules/users/controllers/UserController"));
const UserValidator_1 = __importDefault(require("@modules/users/infra/http/validator/UserValidator"));
const userRouter = express_1.default.Router();
const upload = multer_1.default(upload_1.default.multer);
userRouter.patch('/avatar/:id', upload.single('avatar'), celebrate_1.celebrate(UserValidator_1.default.uploadAvatar), UserController_1.default.uploadAvatar);
exports.default = userRouter;
