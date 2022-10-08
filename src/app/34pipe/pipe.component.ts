import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  title: string = 'unit testing of pipes';
  size: number = 123333333;

  constructor() {}

  ngOnInit(): void {}
}
