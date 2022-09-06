import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryContext } from './inventory.context';

export const SETS_STATE_INVENTORY_CONTEXT = new InjectionToken<SetsStateInventoryContextPort>('SETS_STATE_INVENTORY_CONTEXT');

export interface SetsStateInventoryContextPort {
  setState(state: InventoryContext): Observable<void>;
}
