import Joi from 'joi';

const validateComment = comment => {
  const schema = {
    text: Joi.string()
      .min(1)
      .required()
  };

  return Joi.validate(comment, schema);
};

export default validateComment;
