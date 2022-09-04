import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ imports: [CommonModule,NgbModule],
  	declarations: [EquipmentsComponent],
  	providers: [],
  	exports: [EquipmentsComponent] })
export class EquipmentsComponentModule {
}
