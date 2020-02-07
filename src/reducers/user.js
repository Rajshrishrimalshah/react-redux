import { ADD_USER, REMOVE_USER } from '../constants';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { name: action.name }];
    case REMOVE_USER:
      return state.filter((item, idx) => idx !== action.index);
    default:
      return state;
  }
};

export { userReducer };
