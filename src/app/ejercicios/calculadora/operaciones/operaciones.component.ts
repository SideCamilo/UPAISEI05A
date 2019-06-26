import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  resultado: number = 0;

  constructor() { }

  ngOnInit() {
  }

  operacion(id) {
    console.log(this);
    switch(id) {
      case 1:
        this.resultado = this.num1 + this.num2;
      break;
      case 2:
          this.resultado = this.num1 - this.num2;
      break;
      case 3:
          this.resultado = this.num1 * this.num2;
      break;
      case 4:
          this.resultado = this.num1 / this.num2;
      break;
    }
  }
}
