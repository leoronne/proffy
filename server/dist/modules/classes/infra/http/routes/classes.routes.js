"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const ClassesController_1 = __importDefault(require("@modules/classes/controller/ClassesController"));
const ClassesValidator_1 = __importDefault(require("@modules/classes/infra/http/validator/ClassesValidator"));
const classesRouter = express_1.default.Router();
classesRouter
    .post('/', celebrate_1.celebrate(ClassesValidator_1.default.store), ClassesController_1.default.store)
    .get('/', celebrate_1.celebrate(ClassesValidator_1.default.index), ClassesController_1.default.index)
    .get('/subjects', ClassesController_1.default.getSubjects);
exports.default = classesRouter;
