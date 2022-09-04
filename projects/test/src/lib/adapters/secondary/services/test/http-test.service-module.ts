import { NgModule } from '@angular/core';
import { HttpTestService } from './http-test.service';
import { GETS_ALL_EQUIPMENT_DTO } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [HttpTestService, { provide: GETS_ALL_EQUIPMENT_DTO, useExisting: HttpTestService }],
  	exports: [] })
export class HttpTestServiceModule {
}
