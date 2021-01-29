import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core-routing.module';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';
import { ObjectsDetailComponent } from './components/objects-detail/objects-detail.component';
import { ObjectsTypesComponent } from './components/objects-types/objects-types.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObjectsService } from './services/objects.service';
import { ObjectsAttributesComponent } from './components/objects-attributes/objects-attributes.component';
import { ObjectsEditAttrsComponent } from './components/objects-edit-attrs/objects-edit-attrs.component';
import { ObjectsLinksComponent } from './components/objects-links/objects-links.component';

@NgModule({
  declarations: [
    MainFrameComponent,
    ObjectsTypesComponent,
    ObjectsListComponent,
    ObjectsDetailComponent,
    ObjectsAttributesComponent,
    ObjectsEditAttrsComponent,
    ObjectsLinksComponent,
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
