import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from './inventory.dto';

export const GETS_ALL_INVENTORY_DTO = new InjectionToken<GetsAllInventoryDtoPort>('GETS_ALL_INVENTORY_DTO');

export interface GetsAllInventoryDtoPort {
  getAll(): Observable<InventoryDTO[]>;
}
