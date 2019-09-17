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

  startProgress() {
    for (let i = 0; i <= 5; i++) {
      this.progreessValue = i * 20;
    }
  }
}
