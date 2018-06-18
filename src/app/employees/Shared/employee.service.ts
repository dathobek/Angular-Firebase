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

  insertData(employee: Employee){
    this.employeelist.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateData(employee: Employee){
    this.employeelist.update(employee.$key,
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary
    
    });
  }

  deleteData($key: string){
    this.employeelist.remove($key)
  }
}
