import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showImg: boolean;
  isEditable: boolean;
  inputField: string;
  progreessValue: number;
  ngContentList = [{ 'value': 'a', 'isTrue': true}, { 'value': 'b', 'isTrue': false }, { 'value': 'c', 'isTrue': true }, { 'value': 'd', 'isTrue': false }, { 'value': 'e', 'isTrue': false }, { 'value': 'f', 'isTrue': true }];
  showValue = true;

  startProgress() {
    for (let i = 0; i <= 5; i++) {
      this.progreessValue = i * 20;
    }
  }
}
