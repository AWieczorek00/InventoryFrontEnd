import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateEquipmentContextPort } from '../../../../application/ports/secondary/context/sets-state-equipment.context-port';
import { SelectsEquipmentContextPort } from '../../../../application/ports/secondary/context/selects-equipment.context-port';
import { EquipmentContext } from '../../../../application/ports/secondary/context/equipment.context';

@Injectable()
export class InMemoryEquipmentContexStorage
  implements SetsStateEquipmentContextPort, SelectsEquipmentContextPort
{
  private _subject: Subject<Partial<EquipmentContext>> = new BehaviorSubject<
    Partial<EquipmentContext>
  >({});

  setState(state: EquipmentContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<EquipmentContext>> {
    return this._subject.asObservable();
  }
}
