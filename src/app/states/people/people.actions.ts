import { Action } from '@ngrx/store';

export enum PeopleActionTypes {
  ADD_PERSON = '[People] ADD_People',
  REMOVE_PERSON = '[People] REMOVE_People',
}

export interface PeopleState {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

export class AddPeople implements Action {
  readonly type = PeopleActionTypes.ADD_PERSON;
  constructor(public payload: PeopleState) {}
}

export class RemovePeople implements Action {
  readonly type = PeopleActionTypes.REMOVE_PERSON;
  constructor(public payload: PeopleState) {}
}

export type PeopleActions = AddPeople | RemovePeople;
