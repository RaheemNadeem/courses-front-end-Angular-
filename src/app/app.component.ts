import { Component, OnInit } from '@angular/core';
import { SideMenuService } from './modules/shared/Services/side-menu-service/side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private sideMenuService: SideMenuService){}

  sideMenuLinks: any

  ngOnInit(): void {
    this.fetchSideMenuLinks()
  }

  fetchSideMenuLinks(){
    this.sideMenuService.getSideMenuLinks().subscribe({
      next: res => {
        this.sideMenuLinks = res
      },

      error: error => {
        console.log('Cannot get links')
      }
    });
  }
  title = 'courses-front-end';
}
