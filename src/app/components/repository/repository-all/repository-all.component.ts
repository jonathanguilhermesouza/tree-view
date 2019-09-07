//packages
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

//services
import { RepositoryService } from 'src/app/components/repository/shared/repository.service';

@Component({
  selector: 'repository-all',
  templateUrl: './repository-all.component.html',
  styleUrls: ['./repository-all.component.css']
})
export class RepositoryAllComponent implements OnInit {

  textSearch: string;

  constructor(
    private router: Router, 
    private service: RepositoryService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getAllRepositories();
  }

  onSearchRepositories(){
    this.service.getAllRepositoriesByText(this.textSearch);
  }
}
