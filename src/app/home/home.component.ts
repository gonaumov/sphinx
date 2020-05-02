import { Component } from '@angular/core';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public rightAnswer = [ '14ce01de60928f7fd0a29980c3f30614ec6092a3', '10f09849c1e1955c763b8177edb2c48d75eb66e7'];
  public riddleState = 'init';
  getRiddleState(input: string): riddleState {
    const guessing = CryptoJS.SHA1(input).toString();
    if (this.rightAnswer.includes(guessing)) {
      return 'correct';
    } else {
      return 'error';
    }
  }
}
