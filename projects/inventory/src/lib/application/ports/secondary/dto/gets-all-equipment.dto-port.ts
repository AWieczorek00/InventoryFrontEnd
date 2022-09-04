import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from './equipment.dto';

export const GETS_ALL_EQUIPMENT_DTO = new InjectionToken<GetsAllEquipmentDtoPort>('GETS_ALL_EQUIPMENT_DTO');

export interface GetsAllEquipmentDtoPort {
  getAll(): Observable<EquipmentDTO[]>;
}
