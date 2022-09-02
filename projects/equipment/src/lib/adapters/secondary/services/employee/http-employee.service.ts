import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/dto/gets-all-employee.dto-port';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee.dto';

@Injectable()
export class HttpEmployeeService implements GetsAllEmployeeDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EmployeeDTO[]> {
    return this._client.get<EmployeeDTO[]>("http://localhost:8080/employee/all");
  }
}
