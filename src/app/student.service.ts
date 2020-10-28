import { Injectable } from '@angular/core';
import { Student } from './students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudents(): Student[] {
    return [
      { id: 1, name: 'student 1', age: 18 },
      { id: 2, name: 'student 2', age: 19 },
    ];
  }

  getStudentById(id: number): Student {
    return { id, name: `student ${id}`, age: 18 };
  }
}
