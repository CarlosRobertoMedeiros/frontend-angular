import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
