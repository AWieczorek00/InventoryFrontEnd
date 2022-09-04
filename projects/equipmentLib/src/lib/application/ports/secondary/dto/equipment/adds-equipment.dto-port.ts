import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from './equipment.dto';

export const ADDS_EQUIPMENT_DTO = new InjectionToken<AddsEquipmentDtoPort>('ADDS_EQUIPMENT_DTO');

export interface AddsEquipmentDtoPort {
  add(equipmentDTO: Partial<EquipmentDTO>): Observable<void>;
}
