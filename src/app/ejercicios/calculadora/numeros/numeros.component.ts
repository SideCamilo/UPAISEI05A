import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
