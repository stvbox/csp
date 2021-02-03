import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core-routing.module';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';
import { ObjectsDetailComponent } from './components/objects-detail/objects-detail.component';
import { ObjectsTypesComponent } from './components/objects-types/objects-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjectsService } from './services/objects.service';
import { ObjectsAttributesComponent } from './components/objects-attributes/objects-attributes.component';
import { ObjectsEditAttrsComponent } from './components/objects-edit-attrs/objects-edit-attrs.component';
import { ObjectsLinksComponent } from './components/objects-links/objects-links.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectsListPickerDialog } from './components/objects-list/objects-list-picker/objects-list-picker.component';
import { ObjectsSearchComponent } from './components/objects-search/objects-search.component';
import { CspApiService } from './services/csp-api.service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    MainFrameComponent,
    ObjectsTypesComponent,
    ObjectsListComponent,
    ObjectsDetailComponent,
    ObjectsAttributesComponent,
    ObjectsEditAttrsComponent,
    ObjectsLinksComponent,
    ObjectsListPickerDialog,
    ObjectsSearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    CspApiService,
    ObjectsService
  ],
  bootstrap: [MainFrameComponent]
})
export class CoreModule { }
