import { combineReducers } from 'redux';
import { excerciseReducer, selectedExcerciseReducer } from './excerciseReducer';

const reducers = combineReducers({
  allExcercises: excerciseReducer,
  currentExcercise: selectedExcerciseReducer,
});

export default reducers;
