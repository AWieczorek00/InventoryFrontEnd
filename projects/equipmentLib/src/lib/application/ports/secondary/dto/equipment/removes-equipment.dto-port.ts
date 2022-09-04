import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from './equipment.dto';

export const REMOVES_EQUIPMENT_DTO = new InjectionToken<RemovesEquipmentDtoPort>('REMOVES_EQUIPMENT_DTO');

export interface RemovesEquipmentDtoPort {
  remove(equipmentDTO: EquipmentDTO): Observable<void>;
}
