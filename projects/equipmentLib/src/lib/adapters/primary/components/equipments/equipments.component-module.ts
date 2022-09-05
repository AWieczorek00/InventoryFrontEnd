import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule,NgbModule,[RouterModule]],
  	declarations: [EquipmentsComponent],
  	providers: [],
  	exports: [EquipmentsComponent] })
export class EquipmentsComponentModule {
}
