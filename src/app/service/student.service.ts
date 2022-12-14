import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}
  saveDetails(info: object) {
    return this.http.post('https://localhost:4200', info);
  }
}
