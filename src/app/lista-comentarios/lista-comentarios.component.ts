import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  comentarios: string[] = ['Hola me gusto su producto', 'Buenas tardes me gustaría pedir mas información', 'Hola'];

  constructor() { }

  ngOnInit() {
  }

}
