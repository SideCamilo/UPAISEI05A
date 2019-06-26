import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() comentarios: any[];
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

  deleteComentario(id) {
    this.comentarios.splice(id - 1, 1);
    id--;
    for (let i = 0; i < this.comentarios.length; i++) {
      this.comentarios[i].id = i+1;
    }
    localStorage.setItem("id", this.id.toString());
    localStorage.setItem("comentarios", JSON.stringify(this.comentarios));
  }
}
