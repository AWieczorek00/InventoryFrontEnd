import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpEquipmentService } from './http-equipment.service';
import { GETS_ALL_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import { ADDS_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/adds-equipment.dto-port';
import { SETS_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/sets-equipment.dto-port';
import { REMOVES_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/removes-equipment.dto-port';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    HttpEquipmentService,
    { provide: GETS_ALL_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: ADDS_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: SETS_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    { provide: REMOVES_EQUIPMENT_DTO, useExisting: HttpEquipmentService },
    
  ],
  exports: [],
})
export class HttpEquipmentServiceModule {}
