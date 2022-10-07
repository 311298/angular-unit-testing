import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'unit-testing';
  count: number = 10;

  showMessage(message: string): string {
    return message;
  }

  increaseCount(number: number) {
    this.count += number;
  }
  decreaseCount(number: number) {
    this.count -= number;
  }
}
