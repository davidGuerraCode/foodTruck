import { useState } from 'react';
import formFieldsDefinition from './formFieldsFactory';

const useForm = validate => {
  const [values, setValues] = useState(formFieldsDefinition());
  const [errors, setErrors] = useState({});

  const onChangeHandler = event => {
    const newFormFieldsState = { ...values };
    const currentElement = { ...newFormFieldsState[event.target.name] };

    currentElement.value = event.target.value;
    newFormFieldsState[event.target.name] = currentElement;

    setErrors(validate(event.target, newFormFieldsState[event.target.name]));
    setValues(newFormFieldsState);
  };
  return { onChangeHandler, values, errors };
};

export default useForm;
