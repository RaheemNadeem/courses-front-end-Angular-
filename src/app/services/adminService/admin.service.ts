import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCourse(course){
    course.category = +course.category
    return this.http.post(`${environment.apiUrl}/courses`,course)
  }

  deleteCourse(id:string){
    return this.http.delete(`${environment.apiUrl}/courses/${id}`)
  }

  getCourses(){
    return this.http.get(environment.couresLink);
  }
}
