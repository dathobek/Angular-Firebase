import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  onSubmit(employeeForm : NgForm){
     this.employeeService.insertData(employeeForm.value) ;
     this.resetForm(employeeForm); 

       }

  resetForm(employeeForm? : NgForm){
    if(employeeForm != null)
    employeeForm.reset();
    this.employeeService.selectedemployee = {
       $key : null,
       name : '',
       position : '',
       office : '',
       salary : 0
    }

       }     
}
