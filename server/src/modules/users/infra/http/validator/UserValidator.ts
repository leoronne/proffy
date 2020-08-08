import { Segments, Joi } from 'celebrate';

export default {
  uploadAvatar: {
    [Segments.PARAMS]: {
      id: Joi.number().integer().required().error(new Error('Invalid ID!')),
    },
  },
};
