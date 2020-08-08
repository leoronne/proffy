"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = {
    store: {
        [celebrate_1.Segments.BODY]: {
            name: celebrate_1.Joi.string().required().error(new Error('Name is a required field!')),
            email: celebrate_1.Joi.string().required().email().error(new Error('Invalid email!')),
            whatsapp: celebrate_1.Joi.string().required().error(new Error('Whats App is a required field!')),
            bio: celebrate_1.Joi.string().required().error(new Error('Bio is a required field!')),
            subject: celebrate_1.Joi.string().required().error(new Error('Subject is a required field!')),
            cost: celebrate_1.Joi.number().required().error(new Error('Cost is a required field!')),
            schedule: celebrate_1.Joi.array()
                .items(celebrate_1.Joi.object()
                .keys({
                week_day: celebrate_1.Joi.number().required(),
                from: celebrate_1.Joi.string().required(),
                to: celebrate_1.Joi.string().required(),
            })
                .required())
                .required()
                .error(new Error('Invalid schedule!')),
        },
    },
    index: {
        [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
            week_day: celebrate_1.Joi.number().error(new Error('Invalid Week Day!')),
            subject: celebrate_1.Joi.string().error(new Error('Invalid Subject!')),
            time: celebrate_1.Joi.string().error(new Error('Invalid Time!')),
        }),
    },
};
