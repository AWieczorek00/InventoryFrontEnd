import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from './inventory.dto';

export const ADDS_INVENTORY_DTO = new InjectionToken<AddsInventoryDtoPort>('ADDS_INVENTORY_DTO');

export interface AddsInventoryDtoPort {
  add(inventoryDTO: Partial<InventoryDTO>): Observable<void>;
}
