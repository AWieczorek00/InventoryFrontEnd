import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentDTO } from './equipment.dto';

export const GETS_ONE_EQUIPMENT_DTO = new InjectionToken<GetsOneEquipmentDtoPort>('GETS_ONE_EQUIPMENT_DTO');

export interface GetsOneEquipmentDtoPort {
  getOne(id: number): Observable<EquipmentDTO>;
}
