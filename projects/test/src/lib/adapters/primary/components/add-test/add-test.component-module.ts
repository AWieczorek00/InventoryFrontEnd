import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTestComponent } from './add-test.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AddTestComponent],
  	providers: [],
  	exports: [AddTestComponent] })
export class AddTestComponentModule {
}
