import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-unit-service',
  templateUrl: './unit-service.component.html',
  styleUrls: ['./unit-service.component.css'],
})
export class UnitServiceComponent implements OnInit {
  constructor(private service: StudentService) {}

  ngOnInit(): void {}
}
