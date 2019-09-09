//packages
import { Component, OnInit } from '@angular/core';

//services
import { TreeListService } from 'src/app/components/tree-list/shared/tree-list.service';

//utils
import { TreeList } from './shared/tree-list.model';

@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {

  treeList:  TreeList[]; 

  constructor(private treeListService: TreeListService) { }

  ngOnInit() {
    this.treeListService.getAll()
    .then((response) => 
      {
        this.treeList = response as TreeList[];
      });

  }
}
