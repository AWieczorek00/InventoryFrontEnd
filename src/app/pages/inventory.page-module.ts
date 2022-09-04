import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpInventoryServiceModule, InventorysComponentModule } from '@inventory';
import { NavigationBarComponentModule } from '@navigation';
import { InventoryPage } from './inventory.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: InventoryPage,
        }
      ]),
  InventorysComponentModule,
  HttpInventoryServiceModule,
  NavigationBarComponentModule,
],
  	declarations: [InventoryPage],
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class InventoryPageModule {
}
