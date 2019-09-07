//packages
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//global variables

//models
import { TreeList } from './tree-list.model';

//data
import * as Data from "../../../../assets/data/data.json";

@Injectable({
  providedIn: 'root'
})
export class TreeListService {

  _jsonData: any;

  constructor(private http: HttpClient) {
    this._jsonData = Data.default;
  }

  public getAll() : Observable<any[]> {
    return this._jsonData;
  }
}
