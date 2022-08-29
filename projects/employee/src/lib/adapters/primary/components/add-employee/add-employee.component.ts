import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADDS_EMPLOYEE_DTO, AddsEmployeeDtoPort } from '../../../../application/ports/secondary/dto/adds-employee.dto-port';

@Component({
  selector: 'lib-add-employee',
  templateUrl: './add-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeComponent {
  readonly addEmployee: FormGroup = new FormGroup({name: new FormControl(), surname: new FormControl()});

  constructor(@Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort) {
  }

  onAddEmployeeSubmited(employee : FormGroup): void {
    console.log(employee.get('name')?.value)
    this._addsEmployeeDto.add({
        name: employee.get('name')?.value,
        surname: employee.get('surname')?.value
    }).subscribe();

    window.location.reload();
  }
}
