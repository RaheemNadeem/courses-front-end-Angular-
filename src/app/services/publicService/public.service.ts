import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http:HttpClient) { }

  getCoursesData(){
    return this.http.get(`${environment.apiUrl}/courses`);
  }
}
