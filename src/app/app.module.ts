import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { DataService } from './data.service';
import  {HttpClientModule}  from  '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material'

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ,HttpClientModule,MatProgressSpinnerModule],
  declarations: [ AppComponent,  SideBarComponent, UsersComponent, DetailsComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
