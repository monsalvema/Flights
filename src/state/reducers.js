import { combineReducers } from 'redux';
import flightReducer from './Flight/reducers';

export default combineReducers({
  home: (state = 'Test') => state,
  flightReducer,
});
