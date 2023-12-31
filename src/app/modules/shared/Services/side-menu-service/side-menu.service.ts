import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(private http: HttpClient) { }

  getSideMenuLinks(){
    return this.http.get(environment.sideMenuLinksUrl);
  }
}
