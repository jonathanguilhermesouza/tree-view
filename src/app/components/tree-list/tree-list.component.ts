//packages
import { Component, OnInit, ViewChild } from '@angular/core';

//services
import { TreeListService } from 'src/app/components/tree-list/shared/tree-list.service';

//utils
import { TreeList } from './shared/tree-list.model';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {

  treeList:  any; 
  @ViewChild(ChildComponent) listViewChild: ChildComponent;

  constructor(private treeListService: TreeListService) {}

  ngAfterViewInit(){
    this.treeListService.getAll()
    .then((response) => 
      {
        this.listViewChild.data = response;
      });
  }

  ngOnInit() { }
}
