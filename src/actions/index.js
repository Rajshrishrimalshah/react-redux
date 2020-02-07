import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_USER,
  REMOVE_USER
} from '../constants';

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const reset = () => {
  return {
    type: RESET
  };
};
export const addUser = name => {
  return {
    type: ADD_USER,
    name
  };
};
export const removeUser = index => {
  return {
    type: REMOVE_USER,
    index
  };
};
