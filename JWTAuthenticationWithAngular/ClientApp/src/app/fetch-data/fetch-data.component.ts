import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenGen } from '../Service/tokenGen';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  public forecasts: WeatherForecast[];

  constructor(private tokenGen: TokenGen) {
    this.tokenGen.GetData().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
