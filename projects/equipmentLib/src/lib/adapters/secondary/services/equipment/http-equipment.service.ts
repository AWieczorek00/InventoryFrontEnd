import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/gets-all-equipment.dto-port';
import { SetsEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/sets-equipment.dto-port';
import { RemovesEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/removes-equipment.dto-port';
import { AddsEquipmentDtoPort } from '../../../../application/ports/secondary/dto/equipment/adds-equipment.dto-port';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment/equipment.dto';

@Injectable()
export class HttpEquipmentService implements GetsAllEquipmentDtoPort, SetsEquipmentDtoPort, RemovesEquipmentDtoPort, AddsEquipmentDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EquipmentDTO[]> {
    return this._client.get<EquipmentDTO[]>('http://localhost:8080/equipment/all');
  }

  set(equipmentDTO: Partial<EquipmentDTO>): Observable<void> {
    return this._client.put<EquipmentDTO>('http://localhost:8080/equipment/update', equipmentDTO).pipe(map(() => void 0));
  }

  remove(equipmentDTO: EquipmentDTO): Observable<void> {
    return this._client.delete<EquipmentDTO>('http://localhost:8080/equipment/delete', {body:equipmentDTO}).pipe(map(() => void 0));
  }

  add(equipmentDTO: Partial<EquipmentDTO>): Observable<void> {
    return this._client.post<EquipmentDTO>('http://localhost:8080/equipment/add', equipmentDTO).pipe(map(() => void 0));
  }
}
