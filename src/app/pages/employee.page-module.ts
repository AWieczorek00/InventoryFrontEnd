import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponentModule } from '@navigation';
import { AddEmployeeComponentModule, EmployeesComponentModule, HttpEmployeeServiceModule } from '@employee';
import { EmployeePage } from './employee.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../request.interceptor';

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
  	providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  	exports: [] })
export class EmployeePageModule {
}
