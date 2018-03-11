import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { people } from './states/people/people.reducer';
import { PersonInputComponent } from './person/person-input/person-input.component';
import { PersonListComponent } from './person/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      people: people,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
