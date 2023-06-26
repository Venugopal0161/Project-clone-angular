import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * from '../assets/trending.json'
// import trending from '../../assets/trending.json';

@Injectable({
  providedIn: 'root',
})
export class HttpGetService {
  itej: any;
  constructor(private http: HttpClient) {}
  getTrending() {
    this.http.get('trending').subscribe((res) => {
      this.itej = res;
      return this.itej;
    });
  }
}
