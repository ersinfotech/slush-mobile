import {FETCH_NOW} from 'constants/actionTypes';

export default function nowReducer(state = '', action) {
  if (action.type === FETCH_NOW) {
    return action.payload.data;
  };
  return state;
}
