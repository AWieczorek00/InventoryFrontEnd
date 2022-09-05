import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EquipmentIdResolver, EquipmentIdResolverModule, HttpEmployeeServiceModule, HttpEquipmentServiceModule, InMemoryEquipmentContexStorageModule, OneEquipmentComponentModule } from '@equipmentLib';
import { NavigationBarComponentModule } from '@navigation';
import { OneEquipmentPage } from './one-equipment.page';
import { FormsModule } from '@angular/forms';

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
  	providers: [],
  	exports: [] })
export class OneEquipmentPageModule {
}
