import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpEmployeeService } from './http-employee.service';
import { GETS_ALL_EMPLOYEE_DTO } from '../../../../application/ports/secondary/dto/gets-all-employee.dto-port';
import { ADDS_EMPLOYEE_DTO } from '../../../../application/ports/secondary/dto/adds-employee.dto-port';
import { REMOVES_EMPLOYEE_DTO } from '../../../../application/ports/secondary/dto/removes-employee.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpEmployeeService, { provide: GETS_ALL_EMPLOYEE_DTO, useExisting: HttpEmployeeService }, { provide: ADDS_EMPLOYEE_DTO, useExisting: HttpEmployeeService }, { provide: REMOVES_EMPLOYEE_DTO, useExisting: HttpEmployeeService }],
  	exports: [] })
export class HttpEmployeeServiceModule {
}
