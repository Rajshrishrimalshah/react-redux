import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS
} from './userTypes';

const initialState = {
  loading: true,
  data: [],
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default userReducer;
