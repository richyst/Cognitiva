import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatRadioModule, MatSelectModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import {CuestionarioComponent} from './cuestionario/cuestionario.component';
import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    GraficasComponent,
    CuestionarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    routing


  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
