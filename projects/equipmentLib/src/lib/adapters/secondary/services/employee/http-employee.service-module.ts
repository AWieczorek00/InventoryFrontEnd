import { NgModule } from '@angular/core';
import { HttpEmployeeService } from './http-employee.service';
import { GETS_ALL_EMPLOYEE_DTO } from '../../../../application/ports/secondary/dto/employee/gets-all-employee.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpEmployeeService, { provide: GETS_ALL_EMPLOYEE_DTO, useExisting: HttpEmployeeService }],
  	exports: [] })
export class HttpEmployeeServiceModule {
}
