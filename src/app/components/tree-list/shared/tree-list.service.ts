//packages
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';
import { of } from 'rxjs';
//global variables

//models
import { TreeList } from './tree-list.model';

//data
import * as data from "../../../../assets/data/data.json";

@Injectable({
  providedIn: 'root'
})
export class TreeListService {

  _jsonData: TreeList[];

  constructor(private http: HttpClient) {
    //this._jsonData = Data.default;
  }
/*  public getAll() : Observable<any[]> {
    return this._jsonData;
  }*/

  public getAll() {
    /*this.http.get('http://localhost:4200')
    .toPromise()
    .then(res => this._jsonData = Data.default as TreeList[]);*/
    let promise = new Promise((resolve, reject) => {
      resolve(data.default as TreeList[]);
    });
    return promise;
  }

  public getAll2(){
  }
  
}
