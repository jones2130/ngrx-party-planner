import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { DetailsActionTypes } from '../../states/details/details.actions';
import { PeopleActionTypes, PeopleState } from '../../states/people/people.actions';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  public people$: Observable<PeopleState>;

  constructor(private store: Store<PeopleState>) {
    this.people$ = this.store.pipe(select('people'));
  }

  addGuest(id: number): void {
    this.store.dispatch({type: DetailsActionTypes.ADD_GUEST, payload: {id: id}});
  }

  removeGuest(id: number): void {
    this.store.dispatch({type: DetailsActionTypes.REMOVE_GUEST, payload: {id: id}});
  }

  removePerson(id) {
    this.store.dispatch({type: PeopleActionTypes.REMOVE_PERSON, payload: {id: id}});
  }

  toggleAttending(id: number): void {
    this.store.dispatch({type: DetailsActionTypes.TOGGLE_ATTENDING, payload: {id: id}});
  }
}
