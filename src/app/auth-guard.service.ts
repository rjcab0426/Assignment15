import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  canActivate(){
    if(localStorage.getItem('token') === null) {
      return false;
    } else { 
      return true;
    }
       
  }
  constructor() { }

}
