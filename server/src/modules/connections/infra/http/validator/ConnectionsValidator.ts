import { Segments, Joi } from 'celebrate';

export default {
  store: {
    [Segments.BODY]: {
      user_id: Joi.number().required().error(new Error('User ID is a required field!')),
    },
  },
};
