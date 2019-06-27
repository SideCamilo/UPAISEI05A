import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { animales, jugadores, peliculas, videojuegos } from '../lista_nombres.js';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  id: any; 
  word: string[] = [];
  selectedWord: string = "";
  palabras: string[] = [];
  mainArray: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
     this.id = this.route.snapshot.paramMap.get('id');
     this.loadArray(parseInt(this.id));
     this.showWord();
    })
  }

  ngOnInit() {
    this.showWord();
  }

  loadArray(id) {
    switch (id) {
      case 1:
        this.mainArray = animales;
      break;
      case 2:
          this.mainArray = jugadores;
      break;
      case 3:
          this.mainArray = peliculas;
      break;
      case 4:
          this.mainArray = videojuegos;
      break;
    }
  }

  showInfo() {
    console.log(this.word);
  }

  showWord() {
    this.word = [];
    this.selectedWord = this.mainArray[Math.trunc(Math.random() * this.mainArray.length)];
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
    console.log(this.word)
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
