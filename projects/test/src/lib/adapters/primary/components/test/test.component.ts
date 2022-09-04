import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment.dto';
import {
  GETS_ALL_EQUIPMENT_DTO,
  GetsAllEquipmentDtoPort,
} from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';

@Component({
  selector: 'lib-test',
  templateUrl: './test.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
    equipments$: Observable<EquipmentDTO[]> = this._getsAllEquipmentDto.getAll();

  constructor(
    @Inject(GETS_ALL_EQUIPMENT_DTO)
    private _getsAllEquipmentDto: GetsAllEquipmentDtoPort
  ) {}


  onSetRepairClicked(equipment: EquipmentDTO): void {
    // let isRepair = equipment.repair ? false : true;
    // this._setsEquipmentDto
    //   .set({
    //     id: equipment.id,
    //     name: equipment.name,
    //     serialNumber: equipment.serialNumber,
    //     typeOfEquipment: equipment.typeOfEquipment,
    //     dateOfPurchase: equipment.dateOfPurchase,
    //     repair: isRepair,
    //   })
    //   .subscribe();
    // window.location.reload();
  }

  onEquipmentDelete(equipmentDTO: EquipmentDTO) {
    // this._removesEquipmentDto.remove(equipmentDTO).subscribe();
    // window.location.reload();
  }
}
