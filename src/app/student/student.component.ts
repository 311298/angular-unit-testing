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
  studentResult!: string;
  countNumber: number = 0;

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

  studentSchoolResult() {
    if (this.calculate(10, 20) >= 40) {
      this.studentResult = 'Pass';
      return this.studentResult;
    } else {
      this.studentResult = 'Fail';
      return this.studentResult;
    }
  }

  saveDataIntoConsole(info: object) {
    console.log(info);
  }

  increaseNumber() {
    this.countNumber += 1;
  }
  decreaseNumber() {
    this.countNumber -= 1;
  }
}
