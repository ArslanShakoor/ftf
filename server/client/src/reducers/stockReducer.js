import { FETCH_STOCK } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_STOCK:
      return action.payload.data;
    default:
      return state;
  }
}
