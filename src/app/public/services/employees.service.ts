import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { seachEmployee } from '../interfaces/EmployeeElement.interface';

const base_url = environment.apiURL
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

constructor(
  private http: HttpClient
) { }

  AllEmployees() {
    const url = `${base_url}employees`
    return this.http.get(url).pipe(tap((resp: any) => {}))
  }

  onBuscarEmployee(id:seachEmployee) {
    const url = `${base_url}employees/${id}`
    return this.http.get(url).pipe(tap((resp: any) => {}))
  }

}
