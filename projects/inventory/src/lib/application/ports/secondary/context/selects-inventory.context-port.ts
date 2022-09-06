import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryContext } from './inventory.context';

export const SELECTS_INVENTORY_CONTEXT = new InjectionToken<SelectsInventoryContextPort>('SELECTS_INVENTORY_CONTEXT');

export interface SelectsInventoryContextPort {
  select(): Observable<Partial<InventoryContext>>;
}
