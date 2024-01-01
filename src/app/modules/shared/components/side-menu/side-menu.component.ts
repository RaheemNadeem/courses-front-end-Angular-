import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})


export class SideMenuComponent {
  @Input() sideMenuLinks:any

  constructor(private router: Router){}
  
  changeCategory(category){
    this.router.navigate(['/home'], { queryParams: { category: category } });
  }
}
