//packages
import { Component, OnInit, Input } from '@angular/core';
import { TreeList } from '../shared/tree-list.model';

//utils
import { Guid } from 'src/app/components/tree-list/shared/guid.model';
import * as $ from 'jquery';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() data: TreeList[];
  @Input() level: number;
  @Input() indexDad: number;
  @Input() indexChild: number;

  constructor() { }

  ngOnInit() {
    this.level = this.level + 1;
    console.log(this.level);
  }

  toggle(event) {
    console.log(event.target);
    console.log(event.target.checked);
    console.log(event.target.parentElement.parentElement.parentElement.id);
    let id = event.target.parentElement.parentElement.parentElement.id;

    if(event.target.checked)
      $('#'+id+' input').prop("checked", true );
    else
      $('#'+id+' input').prop("checked", false ); 
    
 }
}
