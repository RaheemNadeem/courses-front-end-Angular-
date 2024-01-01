import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http:HttpClient) { }

  getCoursesData(category:number){
    let queryParam = category ? `?category=${category}`:''
    return this.http.get(`${environment.apiUrl}/courses${queryParam}`);
  }
}
