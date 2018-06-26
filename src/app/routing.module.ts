import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';


import {EmployeesComponent} from './employees/employees.component';


const route: Routes =[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
   {path: 'employees', component: EmployeesComponent}
  //{path: '', component:},
] 

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
