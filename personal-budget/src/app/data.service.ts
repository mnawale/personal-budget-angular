import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  cost = '10';

  constructor(public http: HttpClient) {}
  //public bvalue=[];
  //public blabels=[];
  //public budget_dict={};

  getmybudget(): Observable<mybudget[]>{
    return this.http.get<mybudget[]>('http://localhost:3000/budget')
  }

  /*getbudgetdata(){
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i=0;i <res.myBudget.length;i++) {
        this.budget_dict[String(res.myBudget[i].label)] = res.myBudget[i].budget;
      }

      return res.myBudget;

  });
  }
  */

}
