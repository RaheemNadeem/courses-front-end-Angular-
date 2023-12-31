import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCoursePageComponent } from './components/admin-course-page/admin-course-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminCoursePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
