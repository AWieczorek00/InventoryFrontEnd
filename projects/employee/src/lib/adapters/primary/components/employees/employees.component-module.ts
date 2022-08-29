import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EmployeesComponent],
  	providers: [],
  	exports: [EmployeesComponent] })
export class EmployeesComponentModule {
}
