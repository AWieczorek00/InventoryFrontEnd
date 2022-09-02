import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEquipmentComponent } from './add-equipment.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddEquipmentComponent],
  	providers: [],
  	exports: [AddEquipmentComponent] })
export class AddEquipmentComponentModule {
}
