import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePageComponent } from 'src/app/modules/public/components/home-page/home-page.component';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-admin-course-page',
  templateUrl: './admin-course-page.component.html',
  styleUrls: ['./admin-course-page.component.css']
})
export class AdminCoursePageComponent implements OnInit{

  addCourseForm: FormGroup
  coursesData:any
  loading:boolean
  @ViewChild('courses') courses: HomePageComponent
  
  constructor(private formBuilder:FormBuilder, private adminService: AdminService){
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.addCourseForm = this.formBuilder.group({
      name:['Angular 8 (formerly Angular 2) - The Complete Guide', Validators.required],
      imageUrl: ['https://i.ibb.co/QvCYGNh/Angular-8-formerly-Angular-2-The-Complete-Guide.png', Validators.required],
      cloudUrl:['https://lucif-my.sharepoint.com/:f:/g/personal/hdm7zcwns_5tb_me/EsKLl8BynLhOqv2zR2bg_b8BQjPHW8WHE9cLNT_cvpktRQ?e=8ug2lK', Validators.required],
      category:['1', Validators.required]
    })
  }

  addCourse(){
    this.loading = true
    this.adminService.addCourse(this.addCourseForm.value).subscribe({
      next: res => {
        this.loading= false
        this.courses.ngOnInit()
        this.addCourseForm.patchValue({
          name:'Angular 8 (formerly Angular 2) - The Complete Guide',
          imageUrl:'https://i.ibb.co/QvCYGNh/Angular-8-formerly-Angular-2-The-Complete-Guide.png',
          cloudUrl:'https://lucif-my.sharepoint.com/:f:/g/personal/hdm7zcwns_5tb_me/EsKLl8BynLhOqv2zR2bg_b8BQjPHW8WHE9cLNT_cvpktRQ?e=8ug2lK',
          category:'1'
        })
        console.log('Course added')
      },
      error: error => {
        this.loading =false
        console.log(error)
      }
    });
  }

  deleteCourse(Id){
    this.adminService.deleteCourse(Id).subscribe({
      next: res => {
        console.log('Course Delete')
        this.courses.ngOnInit()
      },

      error: error => {
        console.log(error)
      }
    })
  }


  // getCourses(){
  //   this.adminService.getCourses().subscribe({
  //     next: (res:[]) => {
  //       res.forEach((element:any) => {
  //        setTimeout(() => {
  //         this.addCourse({
  //           name:element?.title,
  //           imageUrl:element?.imageUrl,
  //           cloudUrl:element?.courseLink,
  //           category:8
  //         })
  //        }, 500);
  //       });
  //     },

  //     error: error => {

  //     }
  //   })
  // }

}
