import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/dto/gets-all-employee.dto-port';
import { REMOVES_EMPLOYEE_DTO, RemovesEmployeeDtoPort } from '../../../../application/ports/secondary/dto/removes-employee.dto-port';

@Component({
  selector: 'lib-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(@Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort, @Inject(REMOVES_EMPLOYEE_DTO) private _removesEmployeeDto: RemovesEmployeeDtoPort) {
  }

  onClickDeleteed(employeeDTO:EmployeeDTO): void {
    this._removesEmployeeDto.remove(employeeDTO).subscribe();
  }
}
