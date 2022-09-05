import { NgModule } from '@angular/core';
import { InMemoryEquipmentContexStorage } from './in-memory-equipment-contex.storage';
import { SETS_STATE_EQUIPMENT_CONTEXT } from '../../../../application/ports/secondary/context/sets-state-equipment.context-port';
import { SELECTS_EQUIPMENT_CONTEXT } from '../../../../application/ports/secondary/context/selects-equipment.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryEquipmentContexStorage, { provide: SETS_STATE_EQUIPMENT_CONTEXT, useExisting: InMemoryEquipmentContexStorage }, { provide: SELECTS_EQUIPMENT_CONTEXT, useExisting: InMemoryEquipmentContexStorage }],
  	exports: [] })
export class InMemoryEquipmentContexStorageModule {
}
