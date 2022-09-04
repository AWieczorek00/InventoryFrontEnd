import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetsAllEquipmentDtoPort } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment.dto';

@Injectable()
export class HttpEquipmentService implements GetsAllEquipmentDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EquipmentDTO[]> {
    return this._client.get<EquipmentDTO[]>("http://localhost:8080/equipment/all");
  }
}
