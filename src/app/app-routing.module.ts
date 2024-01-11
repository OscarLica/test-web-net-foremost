import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuarioFormularoComponent } from './components/usuario-formularo/usuario-formularo.component';

const routes: Routes = [

  { path: 'user-list', component: UsuariosListComponent },
  { path: 'user-formulario/:id', component: UsuarioFormularoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
