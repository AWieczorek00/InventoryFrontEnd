import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponentModule } from '@navigation';
import { AddEquipmentComponentModule, EquipmentsComponentModule, HttpEmployeeServiceModule, HttpEquipmentServiceModule, OneEquipmentComponentModule } from '@equipmentLib';
import { EquipmentPage } from './equipment.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EquipmentPage,
      },
    ]),
    NavigationBarComponentModule,
    EquipmentsComponentModule,
    HttpEquipmentServiceModule,
    AddEquipmentComponentModule,
    HttpEmployeeServiceModule,
    OneEquipmentComponentModule
  ],
  declarations: [EquipmentPage],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  exports: [],
})
export class EquipmentPageModule {}
