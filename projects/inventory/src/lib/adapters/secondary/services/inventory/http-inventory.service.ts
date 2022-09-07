import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllInventoryDtoPort } from '../../../../application/ports/secondary/dto/gets-all-inventory.dto-port';
import { AddsInventoryDtoPort } from '../../../../application/ports/secondary/dto/adds-inventory.dto-port';
import { RemovesInventoryDtoPort } from '../../../../application/ports/secondary/dto/removes-inventory.dto-port';
import { GetsOneInventoryDtoPort } from '../../../../application/ports/secondary/dto/gets-one-inventory.dto-port';
import { SetsInventoryDtoPort } from '../../../../application/ports/secondary/dto/sets-inventory.dto-port';
import { InventoryDTO } from '../../../../application/ports/secondary/dto/inventory.dto';

@Injectable()
export class HttpInventoryService implements GetsAllInventoryDtoPort, AddsInventoryDtoPort, RemovesInventoryDtoPort, GetsOneInventoryDtoPort, SetsInventoryDtoPort {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<InventoryDTO[]> {
    return this._client.get<InventoryDTO[]>("http://localhost:8080/inventory/all");
  }

  add(inventoryDTO: Partial<InventoryDTO>): Observable<void> {
    return this._client.post<InventoryDTO>("http://localhost:8080/inventory/add", inventoryDTO).pipe(map(() => void 0));
  }

  remove(inventory: InventoryDTO): Observable<void> {
    return this._client.delete<InventoryDTO>("http://localhost:8080/inventory/delete",{body:inventory}).pipe(map(() => void 0));
  }

  getOne(id: number): Observable<InventoryDTO> {
    return this._client.get<InventoryDTO>("http://localhost:8080/inventory/"+id);
  }

  set(inventoryDTO: Partial<InventoryDTO>): Observable<void> {
    return this._client.put<InventoryDTO>("http://localhost:8080/inventory/update", inventoryDTO).pipe(map(() => void 0));
  }
}
