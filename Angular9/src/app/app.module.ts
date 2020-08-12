import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFormsModule } from './angular-forms/angular-forms.module';
import { RxjsObservableComponent } from './Observable/rxjs-observable/rxjs-observable.component';
@NgModule({
  declarations: [
    AppComponent,
    RxjsObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
