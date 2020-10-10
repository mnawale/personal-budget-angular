import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataSource = {
    datasets: [
        {
            data:[],
            backgroundColor: [
                '#ff3364',
                '#808080',
                '#acff33',
                '#fd6b19',
                '#859b45',
                '#9b4593',
                '#4f459b',
                '#459b7e',
                '#410e12'
            ],
        }
    ],

    labels: []
  };

  private _url: string ="http://localhost:3000/budget";

  constructor(private http: HttpClient) {

  }


  getChartData(): Observable<any> {
      return this.http.get(this._url);
  }

}
