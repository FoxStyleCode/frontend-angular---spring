import { Component, OnInit } from '@angular/core'
import { EmployeeElement } from './interfaces/EmployeeElement.interface';
import { EmployeesService } from './services/employees.service';



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  public test: string = 'Este es el inicio del test'


  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profile_image', 'employee_anual_salary'];
  

  public value:any = 0;
  columns:any = [];
  dataSource:any = [];

  constructor(
    private employees: EmployeesService 
  ) {}

  ngOnInit(): void {
    this.onAllEmployees()
  } 


  onAllEmployees(){
    this.employees.AllEmployees().subscribe(
      resp => {
       const ELEMENT_DATA: EmployeeElement[] = resp.data ;
        this.dataSource = ELEMENT_DATA;
      }
    )
  }

  onBuscar(){
    this.employees.onBuscarEmployee(this.value).subscribe(
      resp => {

        if(resp.data == null){
          this.onAllEmployees()
        }else{
          const ELEMENT_DATA: EmployeeElement[] = [resp.data]  ;
          this.dataSource = ELEMENT_DATA;
        }
        
      }
    )
  }
}
