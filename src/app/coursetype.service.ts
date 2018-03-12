import { Injectable } from '@angular/core';
import { ICourseType } from './course';

@Injectable()
export class CoursetypeService {

  courseType: ICourseType[] = [];

  constructor() { }

  getCourseType() {
    return this.courseType = [
      {
        id: 1,
        type: 'Angular'
      },
      { 
        id: 1,
        type: 'JavaScript'
      },
      {
        id: 1,
        type: 'NodeJS'
      },
    ]
  }
   

}
