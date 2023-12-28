import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/publicService/public.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  coursesData: any

  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.getCoursesData()
  }

  getCoursesData() {
    this.publicService.getCoursesData().subscribe({
      next: res => {
        this.coursesData = res
      },

      error: error => {

      }
    });
  }
}
