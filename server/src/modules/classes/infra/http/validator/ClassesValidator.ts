import { Segments, Joi } from 'celebrate';

export default {
  store: {
    [Segments.BODY]: {
      name: Joi.string().required().error(new Error('Name is a required field!')),
      email: Joi.string().required().email().error(new Error('Invalid email!')),
      whatsapp: Joi.string().required().error(new Error('Whats App is a required field!')),
      bio: Joi.string().required().error(new Error('Bio is a required field!')),
      subject: Joi.string().required().error(new Error('Subject is a required field!')),
      cost: Joi.number().required().error(new Error('Cost is a required field!')),
      schedule: Joi.array()
        .items(
          Joi.object()
            .keys({
              week_day: Joi.number().required(),
              from: Joi.string().required(),
              to: Joi.string().required(),
            })
            .required()
        )
        .required()
        .error(new Error('Invalid schedule!')),
    },
  },
  index: {
    [Segments.QUERY]: Joi.object().keys({
      week_day: Joi.number().error(new Error('Invalid Week Day!')),
      subject: Joi.string().error(new Error('Invalid Subject!')),
      time: Joi.string().error(new Error('Invalid Time!')),
    }),
  },
};
