import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass'],
})
export class StudentComponent implements OnInit {
  @Input() id: number;
  @Output() selected = new EventEmitter<string>();

  student: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.student = this.studentService.getStudentById(this.id);
  }

  select(): void {
    this.selected.emit(this.student.name);
  }
}
