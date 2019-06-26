import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { animales, jugadores, peliculas, videojuegos } from '../lista_nombres.js';
import swal from 'sweetalert2';

@Component({
  selector: 'palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])

  handleKeyboardEvent(event: KeyboardEvent) {
    this.checkLetter(event.key);
  }

  word: string[] = [];
  selectedWord: string = "";
  palabras: string[] = [];

  constructor() { }

  ngOnInit() {
    this.showWord();
  }

  showInfo() {
    console.log(this.word);
  }

  showWord() {
    this.word = [];
    this.selectedWord = animales[Math.trunc(Math.random() * animales.length)];
    console.log(this.selectedWord);
    for (let i = 0; i < this.selectedWord.length; i++) {
      if (this.selectedWord[i] === ' ') {
        this.word.push(' ');
      } else {
        this.word.push('');
      }
    }
  }

  checkLetter(letter) {
    for (let i = 0; i < this.selectedWord.length; i++) {
      if (letter == this.selectedWord[i]) {
        this.word[i] = this.selectedWord[i];
      }
    }
    this.checkWord();
  }

  checkWord() {
    let correct = true;
    for(let i = 0; i < this.selectedWord.length; i++) {
      if (this.selectedWord[i] !== this.word[i]) {
        correct = false;
      }
    }
    if (correct) this.showWord();
  }
}
