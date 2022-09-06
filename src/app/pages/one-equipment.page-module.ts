import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EquipmentIdResolver, EquipmentIdResolverModule, HttpEmployeeServiceModule, HttpEquipmentServiceModule, InMemoryEquipmentContexStorageModule, OneEquipmentComponentModule } from '@equipmentLib';
import { NavigationBarComponentModule } from '@navigation';
import { OneEquipmentPage } from './one-equipment.page';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OneEquipmentPage,
          resolve: {
            equipmentId: EquipmentIdResolver,
          },
        }
      ]),
  NavigationBarComponentModule,
  OneEquipmentComponentModule,
  HttpEquipmentServiceModule,
  InMemoryEquipmentContexStorageModule,
  EquipmentIdResolverModule,
  HttpEmployeeServiceModule,
  FormsModule 
],
  	declarations: [OneEquipmentPage],
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class OneEquipmentPageModule {
}
