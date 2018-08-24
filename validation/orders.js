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

 if (error) {
     error.details.map(err => {
       const errorVal = err.message.replace(/"/g, '');
      const key = errorVal.split(' ')[0];
         switch (key) {
         case 'creditCard':
          errors[key] = 'Input the 16 digits on your card';
         break;
         case 'month':
           errors[key] = 'example 11/19';
          break;
        case 'year':
          errors[key] = 'add the year the card expires'
           '';
         break;
        case 'securityCode':
          errors[key] = 'input the three digits on your card';
          break;
       case 'name':
         errors[key] = 'input the name of the card holder';
       break;
       case 'country':
           errors[key] = 'add the country of the card holder';
          break;
        case 'zipCode':
          errors[key] = 'add correct zip code 5 - 9';
          break;
        default:
          return;
      }
    });



//export{};
//export{};