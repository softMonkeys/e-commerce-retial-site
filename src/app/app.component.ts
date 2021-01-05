import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce retial site';
  name = 'Ben';
  randomId = 45;
  randomStatus = 'offline';
  randomStatusFlag = false;
  buttonState = true;

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleStatus() {
    this.randomStatusFlag = !this.randomStatusFlag;
    if (this.randomStatusFlag == true) {
      this.randomStatus = 'online';
    } else {
      this.randomStatus = 'offline';
    }

    return this.randomStatus;
  }
}
