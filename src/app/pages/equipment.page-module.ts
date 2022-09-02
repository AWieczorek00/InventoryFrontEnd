import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddEquipmentComponentModule, EquipmentsComponentModule, HttpEmployeeServiceModule, HttpEquipmentServiceModule } from '@equipment';
import { NavigationBarComponentModule } from '@navigation';
import { EquipmentPage } from './equipment.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EquipmentPage,
        }
      ]),
  EquipmentsComponentModule,
  HttpEquipmentServiceModule,
  NavigationBarComponentModule,
  AddEquipmentComponentModule,
  HttpEmployeeServiceModule
],
  	declarations: [EquipmentPage],
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class EquipmentPageModule {
}
