import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataSource1 } from './trial';
//import { dataSource } from './homepage/homepage.component'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  private _url: string ="http://localhost:3000/budget";

  constructor(private http: HttpClient) { }

  getBudget(): Observable<any>{
    return this.http.get(this._url);
  }
}
