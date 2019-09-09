//packages
import { Component, OnInit, Input } from '@angular/core';
import { TreeList } from '../shared/tree-list.model';
import * as $ from 'jquery';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: TreeList[];
  @Input() level: number;

  constructor() { }

  ngOnInit() {
    this.level = this.level + 1;
    $('child').toggle();
  }

  openTree(event : any) {
    let id = event.target.parentElement.parentElement.parentElement.id;
    if(id){
      $('#icon'+id+'').toggleClass('fa-chevron-down');
      $('#'+id+' child').toggle();
    }
  }

  setCheckbok(event : any, type: string) {

    let id = null;
    let isChecked = false;

    if(type === 'divClick' && event.target.parentElement.id != ''){
      id = event.target.parentElement.id;
      isChecked = !$('#'+id+' input').first()[0].checked;
    }
    else if(type === 'divClick' && !event.target.checked)
      return;
    else {
      id = event.target.parentElement.parentElement.parentElement.parentElement.id;
      isChecked = event.target.checked;
    }
    
    if(id){
      if(isChecked)
        $('#'+id+' input').prop("checked", true );
      else
        $('#'+id+' input').prop("checked", false ); 
      }
  }

  getChild(child: any){
    if(child)
      return Object.keys(child).map(key => (child[key]));
      else
      return [];
  }
}
