import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OneEquipmentComponent } from './one-equipment.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, [FormsModule]],
  declarations: [OneEquipmentComponent],
  providers: [],
  exports: [OneEquipmentComponent],
})
export class OneEquipmentComponentModule {}
