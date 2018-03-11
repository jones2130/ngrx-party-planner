import { DetailsActions, DetailsActionTypes } from './details.actions';

import { PeopleState } from '../people/people.actions';

export const details = (state: PeopleState, action) => {
  switch(action.type) {
    case DetailsActionTypes.ADD_GUEST:
      if(state.id === action.payload.id) {
        return Object.assign({}, state, {guests: state.guests + 1});
      }
      return state;
    case DetailsActionTypes.REMOVE_GUEST:
      if(state.id === action.payload.id) {
        return Object.assign({}, state, {guests: state.guests - 1});
      }
      return state;
    case DetailsActionTypes.TOGGLE_ATTENDING:
      if(state.id === action.payload.id) {
        return Object.assign({}, state, {attending: state.attending})
      }
      return state;
    default:
      return state;
  }
}
