import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { IStudents } from '../students';
import { FormService } from '../form.service';


@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

studentDetail: IStudents[];

  private searchStudent: string;

  studentList: IStudents;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.searchStudent = '';
    this.studentDetail = this.formService.getStudents();
  }

}
