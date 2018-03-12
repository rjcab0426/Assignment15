import { Injectable } from '@angular/core';
import { IStudents } from './students';
import { ICourseType } from './course';



@Injectable()
export class FormService {

  studentList: IStudents[] = []; 

  constructor() { }

  addStudents(studentDetail: IStudents) {
    this.studentList.push(studentDetail); 
  }
   
  getStudents(): IStudents [] {
    return this.studentList;
  }

  
}
