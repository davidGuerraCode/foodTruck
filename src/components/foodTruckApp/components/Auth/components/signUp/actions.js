const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

const UpdateFormField = val => {
  return {
    type: UPDATE_FORM_FIELD,
    val
  };
};

export { UPDATE_FORM_FIELD, UpdateFormField };
