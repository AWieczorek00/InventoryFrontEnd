import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddInventoryComponentModule, HttpEquipmentServiceModule, HttpInventoryServiceModule } from '@inventory';
import { NavigationBarComponentModule } from '@navigation';
import { AddInventoryPage } from './add-inventory.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddInventoryPage,
        }
      ]),
  AddInventoryComponentModule,
  HttpEquipmentServiceModule,
  HttpInventoryServiceModule,
  NavigationBarComponentModule
],
  	declarations: [AddInventoryPage],
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class AddInventoryPageModule {
}
