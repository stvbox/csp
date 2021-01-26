import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectsDetailComponent } from './components/objects-detail/objects-detail.component';
import { ObjectsEditComponent } from './components/objects-edit/objects-edit.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';
import { ObjectsTypesComponent } from './components/objects-types/objects-types.component';

const routes: Routes = [{
  path: 'objects', component: ObjectsListComponent,
}, {
  path: 'objects/edit/:id', component: ObjectsEditComponent,
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