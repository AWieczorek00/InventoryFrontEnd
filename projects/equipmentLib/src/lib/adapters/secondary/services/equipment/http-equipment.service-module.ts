import { NgModule } from '@angular/core';
import { HttpEquipmentService } from './http-equipment.service';
import { GETS_ALL_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/equipment/gets-all-equipment.dto-port';
import { SETS_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/equipment/sets-equipment.dto-port';
import { REMOVES_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/equipment/removes-equipment.dto-port';
import { ADDS_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/equipment/adds-equipment.dto-port';
import { GETS_ONE_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/equipment/gets-one-equipment.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HttpEquipmentService,
    { provide: GETS_ALL_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: SETS_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: REMOVES_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: ADDS_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: GETS_ONE_EQUIPMENT_DTO, useExisting: HttpEquipmentService }
  ],
  exports: [],
})
export class HttpEquipmentServiceModule {}
