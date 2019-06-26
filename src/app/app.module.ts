import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';
import { NuevocomponenteComponent } from './nuevocomponente/nuevocomponente.component';
import { NumerosComponent } from './ejercicios/calculadora/numeros/numeros.component';
import { OperacionesComponent } from './ejercicios/calculadora/operaciones/operaciones.component';
import { FormularioComentariosComponent } from './ejercicios/comentarios/formulario-comentarios/formulario-comentarios.component';
import { ComentarioComponent } from './ejercicios/comentarios/comentario/comentario.component';
import { PalabrasComponent } from './ejercicios/ahorcado/palabras/palabras.component';
import { MenuComponent } from './ejercicios/ahorcado/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComentariosComponent,
    ListaComentariosComponent,
    NuevocomponenteComponent,
    NumerosComponent,
    OperacionesComponent,
    FormularioComentariosComponent,
    ComentarioComponent,
    PalabrasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
