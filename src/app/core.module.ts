import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core-routing.module';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';
import { ObjectsDetailComponent } from './components/objects-detail/objects-detail.component';
import { ObjectsTypesComponent } from './components/objects-types/objects-types.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObjectsService } from './services/objects.service';
import { ObjectsPreviewComponent } from './components/objects-preview/objects-preview.component';
import { ObjectsEditAttrsComponent } from './components/objects-edit-attrs/objects-edit-attrs.component';

@NgModule({
  declarations: [
    MainFrameComponent,
    ObjectsTypesComponent,
    ObjectsListComponent,
    ObjectsDetailComponent,
    ObjectsPreviewComponent,
    ObjectsEditAttrsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ObjectsService
  ],
  bootstrap: [MainFrameComponent]
})
export class CoreModule { }
