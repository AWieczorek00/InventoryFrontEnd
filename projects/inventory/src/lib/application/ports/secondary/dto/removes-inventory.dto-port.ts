import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from './inventory.dto';

export const REMOVES_INVENTORY_DTO = new InjectionToken<RemovesInventoryDtoPort>('REMOVES_INVENTORY_DTO');

export interface RemovesInventoryDtoPort {
  remove(inventory: InventoryDTO): Observable<void>;
}
