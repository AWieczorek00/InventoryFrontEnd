import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employee.dto';

export const REMOVES_EMPLOYEE_DTO = new InjectionToken<RemovesEmployeeDtoPort>('REMOVES_EMPLOYEE_DTO');

export interface RemovesEmployeeDtoPort {
  remove(id: number): Observable<void>;
}
