import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorksComponent,
    CommentsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
