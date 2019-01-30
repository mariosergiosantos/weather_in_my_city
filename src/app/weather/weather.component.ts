import { Component, OnInit } from '@angular/core';
import { WeathermapService } from '../weather/service/weatherMap.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public filter: {};
  public hasError: boolean;
  public resultWeather: {};

  constructor(private weathermapService: WeathermapService) { }

  ngOnInit() {
    this.weathermapService.init();
    this.clearFilter();
    this.hasError = false;
  }

  search() {
    this.hasError = false;
    this.weathermapService.search(this.filter)
      .subscribe(
        (result) => {
          this.resultWeather = result;
          this.clearFilter();
        },
        (err) => {
          this.hasError = true;
        },
        () => console.log('Complete...')
      );
  }

  clearFilter(): void {
    this.filter = {
      search: null,
      units: 'metric'
    };
  }

}
