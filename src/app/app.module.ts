//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { RepositoryAllComponent } from './components/repository/repository-all/repository-all.component';
import { RepositoryIndividualComponent } from './components/repository/repository-individual/repository-individual.component';
import { RepositoryListComponent } from './components/repository/repository-list/repository-list.component';
import { RepositoryDetailComponent } from './components/repository/repository-detail/repository-detail.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { ChildComponent } from './components/tree-list/child/childcomponent';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RepositoryAllComponent,
    RepositoryIndividualComponent,
    RepositoryListComponent,
    RepositoryDetailComponent,
    TreeListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'repository-all', component: RepositoryAllComponent },
      { path: 'repository-individual', component: RepositoryIndividualComponent},
      { path: 'repository-detail', component: RepositoryDetailComponent},
      { path: 'tree-list', component: TreeListComponent}
    ]),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
