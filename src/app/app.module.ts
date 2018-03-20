import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { RegisteredComponent } from './registered/registered.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { FormService } from './form.service';
import { CoursetypeService } from './coursetype.service';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchPipe } from './search.pipe';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent, data: {depth: 1} },
  { path: 'form', component: FormComponent, canActivate: [AuthGuardService], data: {depth: 2} },
  { path: 'registered', component: RegisteredComponent, canActivate: [AuthGuardService], data: {depth: 3} },
  { path: 'studentDetail/:id', component: StudentDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegisteredComponent,
    CapitalizePipe,
    SearchPipe,
    StudentDetailComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormService, CoursetypeService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
