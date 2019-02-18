import { ActionType } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.RECEIVE_ENTRIES:
      const entries = action.payload;
      return {
        ...state,
        ...entries
      };

    case ActionType.ADD_ENTRY:
      const entry = action.payload;
      return {
        ...state,
        ...entry
      };

    default:
      return state;
  }
};

export default reducer;
