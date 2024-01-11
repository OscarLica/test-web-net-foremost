import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuarioFormularoComponent } from './components/usuario-formularo/usuario-formularo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TareasListComponent } from './components/tareas-list/tareas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    UsuarioFormularoComponent,
    TareasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
