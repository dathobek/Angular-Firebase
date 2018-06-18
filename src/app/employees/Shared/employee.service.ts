import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Employee } from './employee.model'

@Injectable()
export class EmployeeService {

  employeelist: AngularFireList<any>;
  selectedemployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.employeelist = this.firebase.list('employees');
    return this.employeelist;
  }

}
