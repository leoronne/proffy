"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const ConnectionsController_1 = __importDefault(require("@modules/connections/controller/ConnectionsController"));
const ConnectionsValidator_1 = __importDefault(require("@modules/connections/infra/http/validator/ConnectionsValidator"));
const connectionsRouter = express_1.default.Router();
connectionsRouter.post('/', celebrate_1.celebrate(ConnectionsValidator_1.default.store), ConnectionsController_1.default.store).get('/', ConnectionsController_1.default.index);
exports.default = connectionsRouter;
