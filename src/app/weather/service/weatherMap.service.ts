import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathermapService {

  private url_api: string;
  private api_key: string;

  constructor(private http: HttpClient) { }

  init(): void {
    this.url_api = 'http://api.openweathermap.org/data/2.5/weather';
    this.api_key = '29a3be18981aaf026ac8c2d6b55db89c';
  }

  search(filtro) {
    return this.http
      .get(`${this.url_api}?q=${filtro.search}&appid=${this.api_key}&units=${filtro.metric || 'metric'}`);
  }
}
