//packages
import { Component, OnInit, Input } from '@angular/core';
import { TreeList } from '../shared/tree-list.model';
import * as $ from 'jquery';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() data: TreeList[];
  @Input() level: number;

  constructor() { }

  ngOnInit() {
    this.level = this.level + 1;
    $('children').toggle();
  }

  openTree(event : any) {
    let id = event.target.parentElement.parentElement.parentElement.id;
    $('#icon'+id+'').toggleClass('fa-chevron-down');
    $('#'+id+' children').toggle();
  }

  setCheckbok(event : any, type: string) {

    let id = null;
    let isChecked = false;

    if(type === 'divClick'){
      id = event.target.parentElement.id;
      isChecked = !$('#'+id+' input').first()[0].checked;
    }
    else{
      id = event.target.parentElement.parentElement.parentElement.id;
      isChecked = event.target.checked;
    }
    
    if(isChecked)
      $('#'+id+' input').prop("checked", true );
    else
      $('#'+id+' input').prop("checked", false ); 
  }
}
