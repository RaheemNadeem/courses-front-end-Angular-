import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    SideMenuComponent,
    TopMenuComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SideMenuComponent,
    PageNotFoundComponent,
    TopMenuComponent,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ]
})
export class SharedModule { }
