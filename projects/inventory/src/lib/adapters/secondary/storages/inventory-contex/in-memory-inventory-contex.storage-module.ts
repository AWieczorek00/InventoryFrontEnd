import { NgModule } from '@angular/core';
import { InMemoryInventoryContexStorage } from './in-memory-inventory-contex.storage';
import { SETS_STATE_INVENTORY_CONTEXT } from '../../../../application/ports/secondary/context/sets-state-inventory.context-port';
import { SELECTS_INVENTORY_CONTEXT } from '../../../../application/ports/secondary/context/selects-inventory.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryInventoryContexStorage, { provide: SETS_STATE_INVENTORY_CONTEXT, useExisting: InMemoryInventoryContexStorage }, { provide: SELECTS_INVENTORY_CONTEXT, useExisting: InMemoryInventoryContexStorage }],
  	exports: [] })
export class InMemoryInventoryContexStorageModule {
}
