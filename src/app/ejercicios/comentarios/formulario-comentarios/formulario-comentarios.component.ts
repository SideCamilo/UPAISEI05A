import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-comentarios',
  templateUrl: './formulario-comentarios.component.html',
  styleUrls: ['./formulario-comentarios.component.css']
})
export class FormularioComentariosComponent implements OnInit {

  nombre: string = "";
  apellido: string = "";
  comentario: string = "";
  id: number = 0;
  comentarios: any[] = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("comentarios")) this.comentarios = JSON.parse(localStorage.getItem("comentarios"));
    if (localStorage.getItem("id")) this.id = parseInt(localStorage.getItem("id"));
  }

  crearComentario() {
    this.id++;
    let newComment = {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      comentario: this.comentario
    };
    this.comentarios.push(newComment);
    console.log(this.comentarios);
    localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
    localStorage.setItem("id", this.id.toString());
  }

}
