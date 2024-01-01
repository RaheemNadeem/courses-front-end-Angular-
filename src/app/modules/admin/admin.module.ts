import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCoursePageComponent } from './components/admin-course-page/admin-course-page.component';
import { SharedModule } from '../shared/shared.module';
import { PublicModule } from '../public/public.module';


@NgModule({
  declarations: [
    AdminCoursePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    PublicModule
  ]
})
export class AdminModule { }
