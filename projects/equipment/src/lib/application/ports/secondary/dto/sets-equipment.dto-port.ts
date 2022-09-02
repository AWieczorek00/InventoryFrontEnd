import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from './equipment.dto';

export const SETS_EQUIPMENT_DTO = new InjectionToken<SetsEquipmentDtoPort>('SETS_EQUIPMENT_DTO');

export interface SetsEquipmentDtoPort {
  set(equipmentDTO: Partial<EquipmentDTO>): Observable<void>;
}
