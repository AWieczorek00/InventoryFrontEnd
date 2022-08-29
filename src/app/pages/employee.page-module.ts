import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponentModule } from '@navigation';
import { AddEmployeeComponentModule, EmployeesComponentModule, HttpEmployeeServiceModule } from '@employee';
import { EmployeePage } from './employee.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeePage,
        }
      ]),
  NavigationBarComponentModule,
  EmployeesComponentModule,
  HttpEmployeeServiceModule,
  AddEmployeeComponentModule
],
  	declarations: [EmployeePage],
  	providers: [],
  	exports: [] })
export class EmployeePageModule {
}
