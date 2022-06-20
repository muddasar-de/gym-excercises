import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  excercises: [],
};

export const excerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXCERCIESE:
      return { ...state, excercises: action.payload };
    default:
      return state;
  }
};

export const selectedExcerciseReducer = (
  state = { current: {} },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECT_EXCERCISE:
      return { current: payload };
    default:
      return state;
  }
};
