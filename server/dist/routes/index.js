"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("@config/upload"));
const classes_routes_1 = __importDefault(require("@modules/classes/infra/http/routes/classes.routes"));
const connections_routes_1 = __importDefault(require("@modules/connections/infra/http/routes/connections.routes"));
const user_routes_1 = __importDefault(require("@modules/users/infra/http/routes/user.routes"));
const routes = express_1.default.Router();
const Development = [
    'Proffy - NLW #2',
    {
        'Made by': 'Leonardo Ronne',
        GitHub: 'https://github.com/leoronne',
    },
];
routes
    // Copyright
    .get('/', (req, res) => {
    res.status(200).send({
        Development,
    });
})
    .use('/classes', classes_routes_1.default)
    .use('/user', user_routes_1.default)
    .use('/connections', connections_routes_1.default)
    .use('/files', express_1.default.static(upload_1.default.uploadsFolder));
exports.default = routes;
