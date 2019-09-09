//packages
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

//services
import { TreeListService } from 'src/app/components/tree-list/shared/tree-list.service';

//utils
import { Guid } from 'src/app/components/tree-list/shared/guid.model';
import { TreeList } from './shared/tree-list.model';

@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {

  treeList:  any; 
  level: number;

  constructor(private treeListService: TreeListService) { }

  ngOnInit() {
    this.level = 1;
    
    let list = [
      {
        id: 1,
        name: '1',
        children: [
          {
            id: 2,
            name: '1.1',
            children: [
              {
                id: 3,
                name: '1.1.1',
                children: [
                  {
                    id: 4,
                    name: '1.1.2'
                  }
                ]
              }
            ]
          },
          {
            id: 5,
            name: '1.2',
            children: [
              {
                id: 6,
                name: '1.2.1',
                children: []
              }
            ]
          }
        ]
      },

      {
        id: 7,
        name: '2',
        children: [
          {
            id: 8,
            name: '2.1',
            children: [
              {
                id: 9,
                name: '2.1.1',
                children: []
              }
            ]
          },
          {
            id: 10,
            name: '1.2',
            children: [
              {
                id: 11,
                name: '1.2.1',
                children: []
              }
            ]
          }
        ]
      }
    ];


    
  

    this.treeListService.getAll()
    .then((response) => 
      {
        this.treeList = response;
        console.log(this.treeList);
        //this.treeList = Object.keys(response).map(key => (response[key]));;
        /*let toList = Object.keys(response)
        .map(key => (response[key]));

        for (let index = 0; index < toList.length; index++) {
          response[index].children = this.runRecursive(response[index].children);
        }

        this.treeList = toList;
        console.log(this.treeList);*/
        //var teste = this.runRecursive(response);


        //const toList = Object.keys(response)
        //.map(key => (response[key]));
        
        //this.treeList = toList;
        //console.log(teste);
      });

    //this.treeList = this.treeListService.getAll();
    //console.log(list);
    //console.log(this.treeList);
  }

  runRecursive(input : any) {
    input = this.convertToArry(input);
    //console.log(input);

    for (let index = 0; index < input.length; index++) {
      input[index].children = this.runRecursive(input[index].children);
  }
    /*for (var i = 0, l = input.length; i < l; i++) {
        var current = input[i];
        //console.log(current);
        //current = this.convertToArry(current);
        //console.log(current);
        //parentid = current.id == null ? '0' : current.id;
        //current.index = i;
        //if (current.children && current.children.length > 0) {
            this.runRecursive(current.children);
        //}
    }*/
    return input;
  }

  convertToArry(obj : any){
    return Object.keys(obj).map(key => (obj[key]));
  }
}
