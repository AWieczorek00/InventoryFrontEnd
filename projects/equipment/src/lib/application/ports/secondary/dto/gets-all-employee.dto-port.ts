import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employee.dto';

export const GETS_ALL_EMPLOYEE_DTO = new InjectionToken<GetsAllEmployeeDtoPort>('GETS_ALL_EMPLOYEE_DTO');

export interface GetsAllEmployeeDtoPort {
  getAll(): Observable<EmployeeDTO[]>;
}
