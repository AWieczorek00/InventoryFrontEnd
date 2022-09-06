import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateInventoryContextPort } from '../../../../application/ports/secondary/context/sets-state-inventory.context-port';
import { SelectsInventoryContextPort } from '../../../../application/ports/secondary/context/selects-inventory.context-port';
import { InventoryContext } from '../../../../application/ports/secondary/context/inventory.context';

@Injectable()
export class InMemoryInventoryContexStorage implements SetsStateInventoryContextPort, SelectsInventoryContextPort {
  private _subject: Subject<Partial<InventoryContext>> = new BehaviorSubject<Partial<InventoryContext>>({});

  setState(state: InventoryContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<InventoryContext>> {
    return this._subject.asObservable();
  }
}
