import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpInventoryService } from './http-inventory.service';
import { GETS_ALL_INVENTORY_DTO } from '../../../../application/ports/secondary/dto/gets-all-inventory.dto-port';
import { ADDS_INVENTORY_DTO } from '../../../../application/ports/secondary/dto/adds-inventory.dto-port';
import { REMOVES_INVENTORY_DTO } from '../../../../application/ports/secondary/dto/removes-inventory.dto-port';
import { GETS_ONE_INVENTORY_DTO } from '../../../../application/ports/secondary/dto/gets-one-inventory.dto-port';

@NgModule({ imports: [HttpClientModule],
  	declarations: [],
  	providers: [HttpInventoryService, { provide: GETS_ALL_INVENTORY_DTO, useExisting: HttpInventoryService }, { provide: ADDS_INVENTORY_DTO, useExisting: HttpInventoryService }, { provide: REMOVES_INVENTORY_DTO, useExisting: HttpInventoryService }, { provide: GETS_ONE_INVENTORY_DTO, useExisting: HttpInventoryService }],
  	exports: [] })
export class HttpInventoryServiceModule {
}
