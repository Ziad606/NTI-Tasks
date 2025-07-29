import { Routes } from '@angular/router';
import { PostsComponent } from './features/posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/update', component: PostEditComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  // { path: '**', redirectTo: 'posts', pathMatch: 'full' },
];
