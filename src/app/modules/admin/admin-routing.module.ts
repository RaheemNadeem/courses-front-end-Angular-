import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursePageComponent } from './components/admin-course-page/admin-course-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCoursePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
