import { useState } from 'react';
import formFieldsDefinition from './formFieldsFactory';

const useForm = validate => {
  const [values, setValues] = useState(formFieldsDefinition);
  const [errors, setErrors] = useState({});

  const onChangeHandler = event => {
    const newFormFieldsState = { ...formFieldsDefinition };
    const currentElement = { ...newFormFieldsState[event.target.name] };

    currentElement.value = event.target.value;
    newFormFieldsState[event.target.name] = currentElement;

    if (
      Object.keys(
        validate(event.target, newFormFieldsState[event.target.name]).length === 0
      )
    ) {
      setErrors(false);
    } else {
      setErrors(validate(event.target, newFormFieldsState[event.target.name]));
    }
    setValues(newFormFieldsState);
  };

  return { onChangeHandler, values, errors };
};

export default useForm;
