import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostComponent } from './posts/post-create/post/post.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

const routes: Routes = [
  {
    path:'', component: RecentPostsComponent
    },
  {
  path:'projects', component: PostListComponent
  },
  {
  path:'create',component: PostComponent
  }
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
