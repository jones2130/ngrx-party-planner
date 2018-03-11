import { Action } from '@ngrx/store';

import { PeopleState } from '../people/people.actions';

export enum DetailsActionTypes {
  ADD_GUEST = '[Details] ADD_GUEST',
  REMOVE_GUEST = '[Details] REMOVE_GUEST',
  TOGGLE_ATTENDING = '[Details] TOGGLE_ATTENDING',
}

export class AddGuest implements Action {
  readonly type = DetailsActionTypes.ADD_GUEST;
  constructor(public payload: PeopleState) {}
}

export class RemoveGuest implements Action {
  readonly type = DetailsActionTypes.REMOVE_GUEST;
  constructor(public payload: PeopleState) {}
}

export class ToggleAttending implements Action {
  readonly type = DetailsActionTypes.TOGGLE_ATTENDING;
  constructor(public payload: PeopleState) {}
}

export type DetailsActions = AddGuest | RemoveGuest | ToggleAttending;
