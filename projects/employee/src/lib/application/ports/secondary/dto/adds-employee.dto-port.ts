import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employee.dto';

export const ADDS_EMPLOYEE_DTO = new InjectionToken<AddsEmployeeDtoPort>('ADDS_EMPLOYEE_DTO');

export interface AddsEmployeeDtoPort {
  add(employeeDTO: Partial<EmployeeDTO>): Observable<void>;
}
