import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormService } from './form.service';
import { RegisteredComponent } from './registered/registered.component';
import { CoursetypeService } from './coursetype.service';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchPipe } from './search.pipe';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'form', component: FormComponent },
  { path: 'registered', component: RegisteredComponent },
  { path: 'studentDetail/:id', component: StudentDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegisteredComponent,
    CapitalizePipe,
    SearchPipe,
    StudentDetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormService, CoursetypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
