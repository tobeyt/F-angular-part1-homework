import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  selected: string;

  constructor(studentService: StudentService) {
    this.students = studentService.getStudents();
  }

  ngOnInit(): void {}
}
