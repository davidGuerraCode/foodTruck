import { UPDATE_FORM_FIELD } from './actions';
import checkValidity from './formFieldValidator';

const reducer = (state, action) => {
  const getType = action && action.type;
  const getVal = action && action.val;

  const type = getType === undefined ? '' : getType;
  const val = getVal === undefined ? '' : getVal;

  switch (type) {
    case UPDATE_FORM_FIELD:
      const newState = { ...state };
      const currentElement = { ...newState[val.inputIdentifier] };

      currentElement.value = val.field.value;

      if (currentElement.validation) {
        currentElement.valid = checkValidity(val.field, currentElement.validation);
      }

      newState[val.inputIdentifier] = currentElement;
      return newState;

    default:
      return state;
  }
};

export default reducer;
