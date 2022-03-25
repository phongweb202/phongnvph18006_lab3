import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiURL = `http://localhost:3000/users`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<any> {
    return this.http.get(apiURL);
  }
  createUser(data: any): Observable<any> {
    return this.http.post(apiURL, data);
  }
  getUser(id: number | string): Observable<any> {
    return this.http.get(`${apiURL}/${id}`);
  }
  updateUser(id: number | string, data: any): Observable<any> {
    return this.http.put(`${apiURL}/${id}`, data);
  }
  removeUser(id:number | string):Observable<any>{
    return this.http.delete(`${apiURL}/${id}`);
  }
}
