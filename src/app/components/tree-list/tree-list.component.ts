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

  TreeList:  any; 
  Level: number;
  @ViewChild('link') ancora; 

  constructor(private treeListService: TreeListService) { }

  ngAfterViewInit() {
    //console.log(this.ancora.nativeElement);
    //$('children').toggle();
    /*$('#tree-view').find('div').has("children").each(function () {
      console.log($(this));
      var branch = $(this); //li with children ul
      console.log($(branch + ' children'));
      $('children').toggle();
    });*/
  }

  toggle(event) {
    let id = event.target.parentElement.parentElement.id;

    if(event.target.checked){
      $('#'+id+' children').toggle( "slow" );
      $('#'+id+' input').prop("checked", true );
    }
    else{
      $('#'+id+' children').toggle( "slow" );
      $('#'+id+' input').prop("checked", false );
    }
 }

 toggle2(event) {
  let id = event.target.parentElement.parentElement.id;
  $('#icon'+id+'').toggleClass('fa-chevron-down');
  $('#'+id+' children').toggle( "fast" );
}

  ngOnInit() {
    this.Level = 1;
    
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

    this.TreeList = list;
  }
}
