import Joi from 'joi';
import PasswordComplexity from 'joi-password-complexity';

const validateSignUp = user => {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
      .required(),
    password: Joi.string()
      .min(8)
      .max(26)
      .required(),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref('password'))
      .min(8)
      .max(26),
    birthDate: Joi.string()
      .min(8)
      .max(8)
      .required(),
    state: Joi.string()
      .min(2)
      .max(2)
      .required(),
    city: Joi.string()
      .min(2)
      .max(50)
      .required(),
    streetAddress: Joi.string()
      .min(6)
      .max(100)
      .required(),
    zipCode: Joi.number()
      .min(5)
      .max(5)
      .required()
  };

  return (
    Joi.validate(schema.password, new PasswordComplexity()) &&
    Joi.validate(user, schema, { abortEarly: false })
  );
};

const validateLogin = user => {
  const schema = {
    email: Joi.string()
      .regex(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
      .required(),
    password: Joi.string()
      .min(8)
      .max(26)
      .required()
  };

  return Joi.validate(user, schema, { abortEarly: false });
};

export { validateSignUp };
export { validateLogin };
