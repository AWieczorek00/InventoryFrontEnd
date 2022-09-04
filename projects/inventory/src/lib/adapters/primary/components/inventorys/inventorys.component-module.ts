import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventorysComponent } from './inventorys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ imports: [CommonModule,NgbModule],
  	declarations: [InventorysComponent],
  	providers: [],
  	exports: [InventorysComponent] })
export class InventorysComponentModule {
}
