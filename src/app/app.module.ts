import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EmployeeService } from './employees/Shared/employee.service';
import { RoutingModule } from './/routing.module';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    SignupComponent
  ],
  imports: [
    // initializing firebase.
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    RoutingModule
   
    
  ],
  providers: [EmployeeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
