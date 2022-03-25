import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiURL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(apiURL);
  }

  getProduct(id: number | String): Observable<any> {
    return this.http.get(`${apiURL}/${id}`);
  }

  updateProduct(id: number | string, data: any): Observable<any> {
    return this.http.put(`${apiURL}/${id}`, data);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(apiURL, data);
  }
  removeProduct(id: number | string): Observable<any> {
    return this.http.delete(`${apiURL}/${id}`);

  }
}
