import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core-routing.module';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { ObjectsListComponent } from './components/objects-list/objects-list.component';

@NgModule({
  declarations: [
    MainFrameComponent,
    ObjectsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainFrameComponent]
})
export class CoreModule { }
