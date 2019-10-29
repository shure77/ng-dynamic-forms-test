import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsMaterialUIModule} from '@ng-dynamic-forms/ui-material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DynamicFormsMaterialUIModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
