import { useState } from 'react';
import formFieldsDefinition from './formFieldsFactory';

const useForm = () => {
  const [values, setValues] = useState(formFieldsDefinition());
  const [errors, setErrors] = useState({});

  const isEmail = email => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return new RegExp(mailRegex).test(email);
  };

  const onChangeHandler = event => {
    const newFormFieldsState = { ...values };
    const currentElement = { ...newFormFieldsState[event.target.name] };
    const { type, name, value } = event.target;
    const getRequired =
      currentElement && currentElement.validation && currentElement.validation.required;
    const required = getRequired === undefined ? false : getRequired;
    const passwordValue = document.querySelector('input[name="password"]').value;

    currentElement.value = event.target.value;
    newFormFieldsState[event.target.name] = currentElement;

    switch (type) {
      case 'text':
        if (required && value.trim() === '') {
          return setErrors({ ...errors, [name]: `The field ${name} is required` });
        }

        return setErrors({ ...errors, [name]: `` });

      case 'email':
        if (required && !isEmail(value.trim())) {
          return setErrors({ ...errors, [name]: `You must provied a valid email` });
        }

        return setErrors({ ...errors, [name]: `` });

      case 'password':
        if (required && name !== 'confirmPassword' && value.trim().length < 6) {
          return setErrors({
            ...errors,
            [name]: `Must have 6 caracters at least`
          });
        }

        if (name === 'confirmPassword' && value.trim() !== passwordValue) {
          console.log('[A]', passwordValue, value);
          return setErrors({
            ...errors,
            [name]: `Passwords are not equals`
          });
        }

        return setErrors({ ...errors, [name]: `` });

      default:
        break;
    }

    setValues(newFormFieldsState);
  };

  return { onChangeHandler, values, errors };
};

export default useForm;
