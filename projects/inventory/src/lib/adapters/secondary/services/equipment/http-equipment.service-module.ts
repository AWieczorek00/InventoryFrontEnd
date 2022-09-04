import { NgModule } from '@angular/core';
import { HttpEquipmentService } from './http-equipment.service';
import { GETS_ALL_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpEquipmentService, { provide: GETS_ALL_EQUIPMENT_DTO, useExisting: HttpEquipmentService }],
  	exports: [] })
export class HttpEquipmentServiceModule {
}
