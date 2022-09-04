import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddInventoryComponent } from './add-inventory.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddInventoryComponent],
  	providers: [],
  	exports: [AddInventoryComponent] })
export class AddInventoryComponentModule {
}
