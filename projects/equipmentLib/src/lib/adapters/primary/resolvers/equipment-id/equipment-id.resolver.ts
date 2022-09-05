import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SETS_STATE_EQUIPMENT_CONTEXT,
  SetsStateEquipmentContextPort,
} from '../../../../application/ports/secondary/context/sets-state-equipment.context-port';

@Injectable()
export class EquipmentIdResolver implements Resolve<boolean> {
  constructor(
    @Inject(SETS_STATE_EQUIPMENT_CONTEXT)
    private _setsStateEquipmentContext: SetsStateEquipmentContextPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._setsStateEquipmentContext
      .setState({ equipmentId: route.params['equipmentId'] })
      .pipe(map((_) => true));
  }
}
