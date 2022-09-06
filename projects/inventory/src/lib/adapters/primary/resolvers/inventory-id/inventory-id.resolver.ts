import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SETS_STATE_INVENTORY_CONTEXT,
  SetsStateInventoryContextPort,
} from '../../../../application/ports/secondary/context/sets-state-inventory.context-port';

@Injectable()
export class InventoryIdResolver implements Resolve<boolean> {
  constructor(
    @Inject(SETS_STATE_INVENTORY_CONTEXT)
    private _setsStateInventoryContext: SetsStateInventoryContextPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._setsStateInventoryContext
      .setState({ invenotryId: route.params['inventorytId'] })
      .pipe(map((_) => true));
  }
}
