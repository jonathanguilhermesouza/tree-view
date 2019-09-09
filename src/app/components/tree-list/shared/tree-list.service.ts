//packages
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
//global variables

//models
import { TreeList } from './tree-list.model';

//data
import * as data from "../../../../assets/data/data.json";

@Injectable({
  providedIn: 'root'
})
export class TreeListService {

  constructor(private http: HttpClient) {}

  public getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve(data.default as TreeList[]);
    });
    return promise;
  }
}
