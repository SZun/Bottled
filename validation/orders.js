import Joi from 'joi';

const validateCheckOut = validInfo => {
  const schema = {
    creditCard: Joi.string()
      .min(16)
      .max(16)
      .required(),
    month: Joi.string()
      .min(2)
      .max(2)
      .required(),
    year: Joi.string()
      .min(4)
      .max(4)
      .required(),
    securityCode: Joi.string()
      .min(3)
      .max(3)
      .required(),
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    country: Joi.string()
      .min(2)
      .max(50)
      .required(),
    zipCode: Joi.string()
      .min(5)
      .max(9)
      .required()
  };
  return Joi.validate(validInfo, schema, { abortEarly: false });
};

export default validateCheckOut;
