"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const celebrate_1 = require("celebrate");
const path_1 = __importDefault(require("path"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'temp', 'uploads')));
app.use(celebrate_1.errors());
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, _) => {
    if (err instanceof AppError_1.default) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        message: 'Internal Server Error',
    });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT);
