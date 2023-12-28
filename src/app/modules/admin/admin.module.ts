import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCoursePageComponent } from './components/admin-course-page/admin-course-page.component';


@NgModule({
  declarations: [
    AdminCoursePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
