import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'works', component: WorksComponent,
  },
  {
    path: 'comments', component: CommentsComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
