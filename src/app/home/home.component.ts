import { Component } from '@angular/core';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public rightAnswer = '14ce01de60928f7fd0a29980c3f30614ec6092a3'
  public defaultValue = 'false'
  convertValue(input: string): string {
    return CryptoJS.SHA1(input).toString();
  }
}
