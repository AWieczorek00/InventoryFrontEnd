import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OneInventoryComponent } from './one-inventory.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [OneInventoryComponent],
  	providers: [],
  	exports: [OneInventoryComponent] })
export class OneInventoryComponentModule {


}
