import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/dto/gets-all-employee.dto-port';
import { AddsEmployeeDtoPort } from '../../../../application/ports/secondary/dto/adds-employee.dto-port';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee.dto';

@Injectable()
export class HttpEmployeeService implements GetsAllEmployeeDtoPort, AddsEmployeeDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EmployeeDTO[]> {
    return this._client.get<EmployeeDTO[]>("http://localhost:8080/employee/all");
  }

  add(employeeDTO: Partial<EmployeeDTO>): Observable<void> {
    return this._client.post<EmployeeDTO>("http://localhost:8080/employee/add", employeeDTO).pipe(map(() => void 0));
  }
}
