import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input('c') compteur: number;
  @Output() getResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(operator:string):void {
    if (operator === '+') {
      this.compteur ++;
    }

    if  (operator === '-') {
      this.compteur --;
    }

    this.getResult.emit(this.compteur);
  }

}
