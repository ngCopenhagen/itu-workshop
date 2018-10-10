import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {Memorygame} from 'game';
import {Card} from "./card/card";

@Component({
  selector: 'itu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  game: Memorygame;
  deck = [{"name": "Angry", "image": "../../../../assets/viking_angry.svg", "flipped": false},
    {"name": "Crying", "image": "../../../../assets/viking_crying.svg", "flipped": false},
    {"name": "Happy", "image": "../../../../assets/viking_happy.svg", "flipped": false},
    {"name": "Love", "image": "../../../../assets/viking_love.svg", "flipped": false},
    {"name": "Sceptical", "image": "../../../../assets/viking_sceptical.svg", "flipped": false},
    {"name": "Smiling", "image": "../../../../assets/viking_smiling.svg", "flipped": false},
    {"name": "Surprised", "image": "../../../../assets/viking_surprised.svg", "flipped": false},
    {"name": "Tongue", "image": "../../../../assets/viking_tongue.svg", "flipped": false}];
  ngOnInit() {}

  startGame() {
    // Solution: app.component.ts - Create new instance of 'Memorygame' with deck and assign it to the game property
    this.game = new Memorygame(this.deck);
  }

  selectCard(card: Card) {
    // Solution: app.component.ts - Select card with 'selectCard' method from 'game'
    this.game.selectCard(card);
  }
}
