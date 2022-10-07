import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  sum: number = 0;
  result: any | undefined;

  constructor(private service: StudentService) {}

  ngOnInit(): void {}

  calculate(number1: number, number2: number) {
    this.sum = number1 + number2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: 'dot net office',
    };
    this.saveDataIntoConsole(info);
    this.service.saveDetails(info).subscribe({
      next: (response) => {
        console.log(response);
        this.result = response;
      },
    });
  }

  studentResult() {
    if (this.calculate(10, 20) >= 40) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  }

  saveDataIntoConsole(info: object) {
    console.log(info);
  }
}
