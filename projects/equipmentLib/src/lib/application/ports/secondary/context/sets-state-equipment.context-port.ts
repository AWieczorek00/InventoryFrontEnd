import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentContext } from './equipment.context';

export const SETS_STATE_EQUIPMENT_CONTEXT = new InjectionToken<SetsStateEquipmentContextPort>('SETS_STATE_EQUIPMENT_CONTEXT');

export interface SetsStateEquipmentContextPort {
  setState(state: EquipmentContext): Observable<void>;
}
