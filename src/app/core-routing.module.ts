import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ObjectsDetailComponent } from './components/objects-detail/objects-detail.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';
import { ObjectsSearchComponent } from './components/objects-search/objects-search.component';
import { ObjectsTypesComponent } from './components/objects-types/objects-types.component';

const routes: Routes = [{
  path: 'objects', component: ObjectsSearchComponent,
}, {
  path: 'objects/:mode/:id', component: ObjectsDetailComponent,
}, {
  path: 'objects/:id', component: ObjectsDetailComponent,
}, {
  path: 'objects-types', component: ObjectsTypesComponent,
}, {
  path: '', redirectTo: '/objects', pathMatch: 'full',
}, {
  path: '**', component: ObjectsListComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }