import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventorysComponent } from './inventorys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,NgbModule,[RouterModule]],
  	declarations: [InventorysComponent],
  	providers: [],
  	exports: [InventorysComponent] })
export class InventorysComponentModule {
}
