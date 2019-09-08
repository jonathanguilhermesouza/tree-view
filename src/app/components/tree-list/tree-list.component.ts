//packages
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

//services
import { TreeListService } from 'src/app/components/tree-list/shared/tree-list.service';

//utils
import { Guid } from 'src/app/components/tree-list/shared/guid.model';

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

    this.treeList = list;
  }
}
