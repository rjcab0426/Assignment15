import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '..//form.service';
import { IStudents, IStudentsModel } from '../students';
import { ICourseType } from '../course';
import { CoursetypeService } from '..//coursetype.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  studentArray: IStudents[] = [];
  courseType: ICourseType[] = [];

  studentM: IStudentsModel
  studentDetail: IStudents

  constructor(
    private formService: FormService, 
    private coursetypeService: CoursetypeService,
    private router: Router
  
  ) { }
     
  ngOnInit() {

    const token = localStorage.getItem('token')
    if(token === null) {
      this.router.navigate(['/login'])
    }
    
    this.studentM = {
      firstName: '',
      lastName: '',
      date: '',
      courseType: ''        
    };   

    this.courseType = this.coursetypeService.getCourseType()
  }
  
  addStudents(values) {
    this.studentDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      date: values.date,
      courseOption: values.courseType
    };
    
    this.formService.addStudents(this.studentDetail)
    
    this.studentArray = this.formService.getStudents()

    this.router.navigate(['/registered'])
  }

  resetForm(studentForm) {
    studentForm.reset();    
  }

}
