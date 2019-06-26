import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = "Inserte Texto";

  salones: string[] = ["ISEI01A", "ISEI02A", "ISEI03A", "ISEI04A"];

  colorBlanco: Boolean = false;

  cambiarColor() {
    this.colorBlanco = !this.colorBlanco;
  }

  constructor() { }

  ngOnInit() {
  }

}
