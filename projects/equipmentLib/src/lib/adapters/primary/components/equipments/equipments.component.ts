import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment/equipment.dto';
import { GETS_ALL_EQUIPMENT_DTO, GetsAllEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/gets-all-equipment.dto-port';
import { SETS_EQUIPMENT_DTO, SetsEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/sets-equipment.dto-port';
import { REMOVES_EQUIPMENT_DTO, RemovesEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/removes-equipment.dto-port';

@Component({
  selector: 'lib-equipments',
  templateUrl: './equipments.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentsComponent {
  equipments$: Observable<EquipmentDTO[]> = this._getsAllEquipmentDto.getAll();

  constructor(
    @Inject(GETS_ALL_EQUIPMENT_DTO)
    private _getsAllEquipmentDto: GetsAllEquipmentDtoPort, @Inject(SETS_EQUIPMENT_DTO) private _setsEquipmentDto: SetsEquipmentDtoPort, @Inject(REMOVES_EQUIPMENT_DTO) private _removesEquipmentDto: RemovesEquipmentDtoPort
  ) {}



  
  onSetRepairClicked(equipment: EquipmentDTO): void {
    let isRepair = equipment.repair ? false : true;
    this._setsEquipmentDto
      .set({
        id: equipment.id,
        name: equipment.name,
        serialNumber: equipment.serialNumber,
        typeOfEquipment: equipment.typeOfEquipment,
        dateOfPurchase: equipment.dateOfPurchase,
        repair: isRepair,
      })
      .subscribe();
    window.location.reload();
  }

  onEquipmentDelete(equipmentDTO: EquipmentDTO) {
    this._removesEquipmentDto.remove(equipmentDTO).subscribe();
    window.location.reload();
  }

 
}
