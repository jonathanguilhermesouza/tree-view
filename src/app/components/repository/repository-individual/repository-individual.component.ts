//packages
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

//services
import { RepositoryService } from 'src/app/components/repository/shared/repository.service';

@Component({
  selector: 'repository-individual',
  templateUrl: './repository-individual.component.html',
  styleUrls: ['./repository-individual.component.css']
})
export class RepositoryIndividualComponent implements OnInit {

  textSearch: string;

  constructor(
    private service: RepositoryService
    ) { }

  ngOnInit() {
    this.service.getAllRepositories();
  }

  onSearchRepositories(){
    this.service.getRepositoryByUser(this.textSearch);
  }
}
