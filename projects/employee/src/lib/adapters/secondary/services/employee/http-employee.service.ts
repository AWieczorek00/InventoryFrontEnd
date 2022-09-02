import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/dto/gets-all-employee.dto-port';
import { AddsEmployeeDtoPort } from '../../../../application/ports/secondary/dto/adds-employee.dto-port';
import { RemovesEmployeeDtoPort } from '../../../../application/ports/secondary/dto/removes-employee.dto-port';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee.dto';

@Injectable()
export class HttpEmployeeService implements GetsAllEmployeeDtoPort, AddsEmployeeDtoPort, RemovesEmployeeDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EmployeeDTO[]> {
    return this._client.get<EmployeeDTO[]>("http://localhost:8080/employee/all");
  }

  add(employeeDTO: Partial<EmployeeDTO>): Observable<void> {
    return this._client.post<EmployeeDTO>("http://localhost:8080/employee/add", employeeDTO).pipe(map(() => void 0));
  }

  remove(employeeDTO: EmployeeDTO): Observable<void> {
    // let params = new HttpParams().append('id',id)

    return this._client.delete<EmployeeDTO>("http://localhost:8080/employee/delete",{body:employeeDTO}).pipe(map(() => void 0));
  }
}
