import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { PeopleActionTypes, PeopleState } from '../../states/people/people.actions';

@Component({
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  public people$: Observable<PeopleState>;
  private peopleIdIterator: number;

  constructor(private store: Store<PeopleState>) {
    this.people$ = this.store.pipe(select('people'));
  }

  ngOnInit() {
    this.peopleIdIterator = 0;
  }

  addPerson(name) {
    this.store.dispatch({type: PeopleActionTypes.ADD_PERSON, payload: {id: this.peopleIdIterator++, name: name}})
  }
}
