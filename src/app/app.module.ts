import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideMenuComponentComponent } from './side-menu-component/side-menu-component.component';
import { HomeComponent } from './home/home.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatGridListModule} from "@angular/material/grid-list";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponentComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, DragDropModule, MatGridListModule, RouterOutlet, MatSidenavModule, MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
