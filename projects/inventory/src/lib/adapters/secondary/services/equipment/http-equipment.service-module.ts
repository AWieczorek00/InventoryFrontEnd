import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpEquipmentService } from './http-equipment.service';
import { GETS_ALL_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import { GETS_ONE_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/gets-one-equipment.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpEquipmentService, { provide: GETS_ALL_EQUIPMENT_DTO, useExisting: HttpEquipmentService }, { provide: GETS_ONE_EQUIPMENT_DTO, useExisting: HttpEquipmentService }],
  	exports: [] })
export class HttpEquipmentServiceModule {
}
