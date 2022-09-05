import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment/equipment.dto';
import { EquipmentContext } from '../../../../application/ports/secondary/context/equipment.context';
import { EmployeeDTO } from '../../../../application/ports/secondary/dto/employee/employee.dto';
import { GETS_ONE_EQUIPMENT_DTO, GetsOneEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/gets-one-equipment.dto-port';
import { SELECTS_EQUIPMENT_CONTEXT, SelectsEquipmentContextPort } from '../../../../application/ports/secondary/context/selects-equipment.context-port';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/dto/employee/gets-all-employee.dto-port';
import { SETS_EQUIPMENT_DTO, SetsEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/sets-equipment.dto-port';

@Component({
  selector: 'lib-one-equipment',
  templateUrl: './one-equipment.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneEquipmentComponent {
  equipment$: Observable<EquipmentDTO> = this._selectsEquipmentContext
    .select()
    .pipe(
      switchMap((contex) =>
        this._getsOneEquipmentDto.getOne(contex.equipmentId as number)
      )
    );
  equipmentId$: Observable<Partial<EquipmentContext>> =
    this._selectsEquipmentContext.select();

  readonly updateEquipment: FormGroup = new FormGroup({
    name: new FormControl(),
    serialNumber: new FormControl(),
    roomNumber: new FormControl(),
    dateOfPurchase: new FormControl(),
  });

  

  typeOfEquipment: string = '';
  employeeId: number | undefined;
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(
    @Inject(GETS_ONE_EQUIPMENT_DTO)
    private _getsOneEquipmentDto: GetsOneEquipmentDtoPort,
    @Inject(SELECTS_EQUIPMENT_CONTEXT)
    private _selectsEquipmentContext: SelectsEquipmentContextPort,
    @Inject(GETS_ALL_EMPLOYEE_DTO)
    private _getsAllEmployeeDto: GetsAllEmployeeDtoPort, @Inject(SETS_EQUIPMENT_DTO) private _setsEquipmentDto: SetsEquipmentDtoPort
  ) {}

  selectEmployeeHandler(event: any) {
    this.employeeId = event.target.value;
    console.log(event.target.value);
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.typeOfEquipment = event.target.value;
    console.log(this.typeOfEquipment);
  }

  onUpadteEquipmentSubmited(equipment: FormGroup, equipmentObject:EquipmentDTO): void {
    this._setsEquipmentDto.set({
        id:equipmentObject.id,
        name: equipment.get('name')?.value,
        serialNumber: equipment.get('serialNumber')?.value,
        employee: { id: this.employeeId, name: '', surname: '' },
        roomNumber: equipment.get('roomNumber')?.value,
        typeOfEquipment: this.typeOfEquipment,
        dateOfPurchase: equipment.get('dateOfPurchase')?.value,
        repair:equipmentObject.repair
    }).subscribe();
    window.location.reload();
  }
}
