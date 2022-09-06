import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpInventoryServiceModule, InMemoryInventoryContexStorageModule, InventoryIdResolver, InventoryIdResolverModule, OneInventoryComponentModule } from '@inventory';
import { NavigationBarComponentModule } from '@navigation';
import { OneInventoryPage } from './one-inventory.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OneInventoryPage,
          resolve: {
            inventoryId: InventoryIdResolver,
          },
        }
      ]),
  NavigationBarComponentModule,
  OneInventoryComponentModule,
  HttpInventoryServiceModule,
  InMemoryInventoryContexStorageModule,
  InventoryIdResolverModule
],
  	declarations: [OneInventoryPage],
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class OneInventoryPageModule {
}
