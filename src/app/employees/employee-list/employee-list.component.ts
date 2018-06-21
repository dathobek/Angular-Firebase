import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { Employee } from '../Shared/employee.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist : Employee[];

  constructor(private employeeService: EmployeeService,private tor: ToastrService) { }

  ngOnInit() {
   var x = this.employeeService.getData();
   x.snapshotChanges().subscribe(item => {
     this.employeelist = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
       this.employeelist.push(y as Employee);
     });
   })

   
  }

  onEdit(emp : Employee){
    this.employeeService.selectedemployee = Object.assign({},emp);
  
  }

  onDelete(key : string){
    this.employeeService.deleteData(key);
    this.tor.warning('Deleled Successfully','Employee Details')
    
  }

}
