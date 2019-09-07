//packages
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

//models
import { Repository } from 'src/app/components/repository/shared/repository.model';

//services
import { RepositoryService } from 'src/app/components/repository/shared/repository.service';

@Component({
  selector: 'repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  repository: Repository;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let username = params['username'];
      let repository = params['repository'];
      this.repositoryService.getRepository(username, repository).subscribe(res => {
        this.repository = res;
      });
    });
  }
}
