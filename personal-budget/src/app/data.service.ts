import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  cost = '10';

  constructor(public http: HttpClient) {}
  
  getmybudget(): Observable<mybudget[]>{
    return this.http.get<mybudget[]>('http://localhost:3000/budget')
  }



}
