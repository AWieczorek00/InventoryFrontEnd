import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from './inventory.dto';

export const GETS_ONE_INVENTORY_DTO = new InjectionToken<GetsOneInventoryDtoPort>('GETS_ONE_INVENTORY_DTO');

export interface GetsOneInventoryDtoPort {
  getOne(id: number): Observable<InventoryDTO>;
}
