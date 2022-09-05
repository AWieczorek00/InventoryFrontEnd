import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentContext } from './equipment.context';

export const SELECTS_EQUIPMENT_CONTEXT = new InjectionToken<SelectsEquipmentContextPort>('SELECTS_EQUIPMENT_CONTEXT');

export interface SelectsEquipmentContextPort {
  select(): Observable<Partial<EquipmentContext>>;
}
