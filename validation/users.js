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
    confirmPassword: Joi.any()
      .valid(Joi.ref('password'))
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
