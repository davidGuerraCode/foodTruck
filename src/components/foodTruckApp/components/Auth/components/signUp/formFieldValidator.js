const isRequired = () => {
  throw new Error('param is required');
};

const checkValidity = (value = isRequired(), rules = isRequired()) => {
  const getRequired = rules && rules.required;
  const required = getRequired === undefined ? false : getRequired;

  let isValid = false;

  if (required) {
    isValid = value.trim() !== '';
  }

  return isValid;
};

export default checkValidity;
