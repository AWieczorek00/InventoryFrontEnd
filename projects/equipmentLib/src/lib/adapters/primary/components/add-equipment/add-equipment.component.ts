import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee/employee.dto';
import {
  GETS_ALL_EMPLOYEE_DTO,
  GetsAllEmployeeDtoPort,
} from '../../../../application/ports/secondary/dto/employee/gets-all-employee.dto-port';
import {
  ADDS_EQUIPMENT_DTO,
  AddsEquipmentDtoPort,
} from '../../../../application/ports/secondary/dto/equipment/adds-equipment.dto-port';

@Component({
  selector: 'lib-add-equipment',
  templateUrl: './add-equipment.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEquipmentComponent {
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();
  readonly addEquipment: FormGroup = new FormGroup({
    name: new FormControl(),
    serialNumber: new FormControl(),
    roomNumber: new FormControl(),
    dateOfPurchase: new FormControl(),
  });

  typeOfEquipment: string = '';
  employeeId: number | undefined;

  constructor(
    @Inject(GETS_ALL_EMPLOYEE_DTO)
    private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
    @Inject(ADDS_EQUIPMENT_DTO) private _addsEquipmentDto: AddsEquipmentDtoPort
  ) {}

  onAddEquipmentSubmited(equipment: FormGroup): void {
    this.employees$.pipe(
      map((employee) => employee.find((employee) => employee.id == 1))
    );
    console.log(equipment.get('dateOfPurchase')?.value);
    this._addsEquipmentDto
      .add({
        name: equipment.get('name')?.value,
        serialNumber: equipment.get('serialNumber')?.value,
        employee: { id: this.employeeId, name: '', surname: '' },
        roomNumber: equipment.get('roomNumber')?.value,
        typeOfEquipment: this.typeOfEquipment,
        dateOfPurchase: equipment.get('dateOfPurchase')?.value,
      })
      .subscribe();
    window.location.reload();
  }

  selectEmployeeHandler(event: any) {
    this.employeeId = event.target.value;
    console.log(event.target.value);
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.typeOfEquipment = event.target.value;
    console.log(this.typeOfEquipment);
  }
}
