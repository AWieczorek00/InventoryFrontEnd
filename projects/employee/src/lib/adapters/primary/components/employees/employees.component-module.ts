import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({ imports: [CommonModule, NgbModule],
  	declarations: [EmployeesComponent],
  	providers: [],
  	exports: [EmployeesComponent] })
export class EmployeesComponentModule {
}
