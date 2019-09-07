//packages
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

//global variables
import { GlobalConfig } from 'src/app/config';

//models
import { Repository } from './repository.model';
import { RepositorySearch } from './repository-search.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  list: Repository[];
  search: RepositorySearch;
  private _baseGitHubUrl = '';

  constructor(
    private http: HttpClient,
    private config: GlobalConfig) {
    this._baseGitHubUrl = config.API_GITHUB_URL;
  }

  //List all repositories
  getAllRepositories() {
    this.http.get(this._baseGitHubUrl + '/repositories')
      .toPromise()
      .then(res => this.list = res as Repository[]);
  }

  //List all repositories filtering by text
  getAllRepositoriesByText(text: string) {
    this.http.get(`${this._baseGitHubUrl}/search/repositories?q=${text}`)
      .toPromise()
      .then((res: RepositorySearch) => { this.list = res.items as Repository[]});
  }

  //List all repositories by user
  getRepositoryByUser(user: string) {
    this.http.get(`${this._baseGitHubUrl}/users/${user}/repos`)
      .toPromise()
      .then(res => this.list = res as Repository[]);
  }

  //Get detail of some repository
  getRepository(username: string, repository: string) : Observable<Repository>{
    return this.http.get<Repository>(`${this._baseGitHubUrl}/repos/${username}/${repository}`);
  }


}
