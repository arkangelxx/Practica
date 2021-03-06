import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';
import { BarraComponent } from './barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
