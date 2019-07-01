const checkValidity = (field, rules) => {
  const getRequired = rules && rules.validation && rules.validation.required;
  const required = getRequired === undefined ? false : getRequired;
  const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const type = field.type;
  const value = field.value;

  let erros = {};

  switch (type) {
    case 'text':
      if (required && value.trim() === '') {
        erros[field.name] = `The field ${field.name} is required`;
      }
      break;

    case 'email':
      const isValidEmail = new RegExp(mailRegex).test(value.trim());
      if (required && !isValidEmail) {
        erros[field.name] = `You must provied a valid email`;
      }
      break;

    case 'password':
      if (required && value.trim().length < 6) {
        erros[field.name] = `The ${field.name} field must have 6 caracters at least`;
      }
      break;

    default:
      break;
  }
  return erros;
};

export default checkValidity;
