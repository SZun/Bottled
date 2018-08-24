 import Joi from "joi";

//properties
 //    creditCard
 //   month
 //   year
 //   securityCode
 //   name
  //  country
  //  zipCode

   const validateCheckOut = validInfo => {
     const schema = {
      property: Joi.string().min().max().required(),
      creditCard : Joi.string()
      .min(16)
      .max(16)
      .required(),
      month:Joi.string()
      .min(2)
      .max(2)
      .required(),
      year: Joi.string()
      .min(4)
      .max(4)
      .required(),
      securityCode:Joi.String
      .min(3)
      .max(3)
      .required(),
      name: Joi.String()
      .min(2)
      .max(50)
      .required(),
      country: Joi.String()
      .min(2)
      .max(50)
      .required(),
      zipCode:Joi.String()
      .min(5)
      .max(9)
      .required()
  };
   return Joi.validate(validInfo, schema, {abortEarly:false});
 }



export default validateCheckOut;
