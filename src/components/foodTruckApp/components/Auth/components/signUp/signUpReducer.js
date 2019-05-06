import { UPDATE_FORM_FIELD } from './actions';

const reducer = (state = [], action) => {
  const getType = action && action.type;
  const getVal = action && action.val;

  const type = getType === undefined ? '' : getType;
  const val = getVal === undefined ? '' : getVal;

  switch (type) {
    case UPDATE_FORM_FIELD:
      const newState = { ...state };
      const currentElement = { ...newState[val.inputIdentifier] };

      currentElement.value = val.value;
      newState[val.inputIdentifier] = currentElement;
      console.log(newState);
      return newState;

    default:
      break;
  }
};

export default reducer;
