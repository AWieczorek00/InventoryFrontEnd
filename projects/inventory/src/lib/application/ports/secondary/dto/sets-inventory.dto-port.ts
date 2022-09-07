import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from './inventory.dto';

export const SETS_INVENTORY_DTO = new InjectionToken<SetsInventoryDtoPort>('SETS_INVENTORY_DTO');

export interface SetsInventoryDtoPort {
  set(inventoryDTO: Partial<InventoryDTO>): Observable<void>;
}
