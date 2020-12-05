import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
