import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://svcy2.myclass.vn/api';

  constructor(private http: HttpClient) { }

  get(uri) {
    return this.http.get(`${this.BASE_URL}/${uri}`).toPromise();
  }

  post(uri, data) {
    return this.http.post(`${this.BASE_URL}/${uri}`, data).toPromise();
    //create new
  }

  put(uri, data) {
    return this.http.put(`${this.BASE_URL}/${uri}`, data).toPromise();
    //update all properties
  }

  patch(uri, data) {
    return this.http.patch(`${this.BASE_URL}/${uri}`, data).toPromise();
    //update some properties
  }

  delete(uri) {
    return this.http.delete(`${this.BASE_URL}/${uri}`).toPromise();
  }
}
