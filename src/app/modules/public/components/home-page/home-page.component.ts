import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/services/publicService/public.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  coursesData: any = []
  @Input() isAdmin:boolean

  loading:boolean
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(private publicService: PublicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res:any) => {
      this.getCoursesData(res?.category)
    })
  }

  getCoursesData(category:number) {
    this.loading =true
    this.publicService.getCoursesData(category).subscribe({
      next: res => {
        this.coursesData = res
        this.loading = false
      },

      error: error => {
        this.loading = false
      }
    });
  }
}
