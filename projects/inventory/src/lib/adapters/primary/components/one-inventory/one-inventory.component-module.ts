import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneInventoryComponent } from './one-inventory.component';

@NgModule({ imports: [CommonModule],
  	declarations: [OneInventoryComponent],
  	providers: [],
  	exports: [OneInventoryComponent] })
export class OneInventoryComponentModule {
}
