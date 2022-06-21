import { ActionTypes } from './../constants/actionTypes';

export const setExcercises = (excercises) => {
  return {
    type: ActionTypes.SET_EXCERCIESE,
    payload: excercises,
  };
};

export const selectExcercise = (excercise) => {
  return {
    type: ActionTypes.SELECT_EXCERCISE,
    payload: excercise,
  };
};

export const removeSelectedExcercise = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_EXCERCISE,
  };
};
