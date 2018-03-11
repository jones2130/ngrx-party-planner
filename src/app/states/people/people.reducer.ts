import { DetailsActions, DetailsActionTypes } from '../details/details.actions';
import { details } from '../details/details.reducer';

import { PeopleActions, PeopleActionTypes, PeopleState } from './people.actions';

export const people = (state:Array<PeopleState> = [], action) => {
  switch(action.type) {
    case PeopleActionTypes.ADD_PERSON:
      return [
        ...state,
        Object.assign({}, {id: action.payload.id, name: action.payload.name, guests: 0, attending: false})
      ];
    case PeopleActionTypes.REMOVE_PERSON:
      console.log(state.filter(person => person.id !== action.payload.id));
      return state.filter(person => person.id !== action.payload.id);
    case DetailsActionTypes.ADD_GUEST:
      return state.map(person => details(person, action));
    case DetailsActionTypes.REMOVE_GUEST:
      return state.map(person => details(person, action));
    case DetailsActionTypes.TOGGLE_ATTENDING:
      return state.map(person => details(person, action));
    default:
      return state;
  }
}
