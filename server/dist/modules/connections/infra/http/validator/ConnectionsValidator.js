"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = {
    store: {
        [celebrate_1.Segments.BODY]: {
            user_id: celebrate_1.Joi.number().required().error(new Error('User ID is a required field!')),
        },
    },
};
