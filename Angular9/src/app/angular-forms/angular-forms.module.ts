import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormsRoutingModule } from './angular-forms-routing.module';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ReactFormsComponent, TemplateDrivenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFormsRoutingModule
  ],
  exports:[ReactFormsComponent]
})
export class AngularFormsModule { }
