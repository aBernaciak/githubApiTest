import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatChipsModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    BootstrapGridModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
