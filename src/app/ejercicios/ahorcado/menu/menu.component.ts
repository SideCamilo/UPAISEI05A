import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categorias: string[] = ['animales', 'jugadores', 'peliculas', 'videojuegos'];

  constructor() { }

  ngOnInit() {
  }

}
