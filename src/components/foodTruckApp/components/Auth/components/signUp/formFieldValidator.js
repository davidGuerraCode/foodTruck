const isRequired = () => {
  throw new Error('param is required');
};

const checkValidity = (field = isRequired(), rules = isRequired()) => {
  const getRequired = rules && rules.required;
  const required = getRequired === undefined ? false : getRequired;
  const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const type = field.type;
  const value = field.value;

  console.log('[-|-]', field);

  let isValid = false;

  switch (type) {
    case 'text':
      if (required) {
        isValid = value.trim() !== '';
      }
      break;

    case 'email':
      if (required) {
        isValid = new RegExp(mailRegex).test(value.trim());
      }
      break;

    case 'password':
      if (required) {
        isValid = value.trim().length > 7;
      }
      break;

    default:
      break;
  }

  return isValid;
};

export default checkValidity;
