import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/adminService/admin.service';

@Component({
  selector: 'app-admin-course-page',
  templateUrl: './admin-course-page.component.html',
  styleUrls: ['./admin-course-page.component.css']
})
export class AdminCoursePageComponent implements OnInit{

  addCourseForm: FormGroup
  loading:boolean
  constructor(private formBuilder:FormBuilder, private adminService: AdminService){
  }

  ngOnInit(): void {
    this.initializeForm()
    // this.getCourses()
  }

  initializeForm(){
    this.addCourseForm = this.formBuilder.group({
      name:['', Validators.required],
      imageUrl: ['', Validators.required],
      cloudUrl:['', Validators.required],
      category:['1', Validators.required]
    })
  }

  addCourse(course){
    this.loading = true
    this.adminService.addCourse(course).subscribe({
      next: res => {
        this.loading= false
        this.addCourseForm.patchValue({
          name:'',
          imageUrl:'',
          cloudUrl:'',
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

  getCourses(){
    this.adminService.getCourses().subscribe({
      next: (res:[]) => {
        res.forEach((element:any) => {
         setTimeout(() => {
          this.addCourse({
            name:element?.title,
            imageUrl:element?.imageUrl,
            cloudUrl:element?.courseLink,
            category:8
          })
         }, 500);
        });
      },

      error: error => {

      }
    })
  }

}
