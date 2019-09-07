//packages
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

//models
import { Repository } from 'src/app/components/repository/shared/repository.model';

@Component({
  selector: 'repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {

  @Input() data: Repository[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDetail(repository: Repository): void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "username": repository.owner.login,
          "repository": repository.name
      }
  };

    this.router.navigate(['/repository-detail'], navigationExtras);
  }
}
