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
      .min(4)
      .max(4)
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

 if (error) {
     error.details.map(err => {
       const errorVal = err.message.replace(/"/g, '');
      const key = errorVal.split(' ')[0];
         switch (key) {
         case 'creditCard':
          errors[key] = 'name must be between 5-50 characters';
         break;
         case 'month':
           errors[key] = 'email is invalid';
          break;
        case 'password':
          errors[key] =
           'must have 8-26 characters, lowercase, uppercase, numeric and symbol';
         break;
        case 'confirmPassword':
          errors[key] = 'passwords must match';
          break;
        case 'state':
          errors[key] = 'state field is invalid';
       break;
       case 'city':
         errors[key] = 'city field is invalid';
       break;
       case 'streetAddress':
           errors[key] = 'street address field is invalid';
          break;
        case 'zipCode':
          errors[key] = 'zip code is invalid';
          break;
        default:
          return;
      }
    });



//export{};
//export{};