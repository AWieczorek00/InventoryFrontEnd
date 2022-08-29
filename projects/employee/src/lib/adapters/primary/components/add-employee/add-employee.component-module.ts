import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddEmployeeComponent],
  	providers: [],
  	exports: [AddEmployeeComponent] })
export class AddEmployeeComponentModule {
}
