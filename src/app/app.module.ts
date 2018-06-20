import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 3f6eb4d3c28741a62e22a4418a5ee7b58ee505d6
=======
>>>>>>> 3f6eb4d3c28741a62e22a4418a5ee7b58ee505d6


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    // initializing firebase.
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
<<<<<<< HEAD
<<<<<<< HEAD
    BrowserModule,
    FormsModule
=======
    BrowserModule
>>>>>>> 3f6eb4d3c28741a62e22a4418a5ee7b58ee505d6
=======
    BrowserModule
>>>>>>> 3f6eb4d3c28741a62e22a4418a5ee7b58ee505d6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
