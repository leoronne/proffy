"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = {
    uploadAvatar: {
        [celebrate_1.Segments.PARAMS]: {
            id: celebrate_1.Joi.number().integer().required().error(new Error('Invalid ID!')),
        },
    },
};
