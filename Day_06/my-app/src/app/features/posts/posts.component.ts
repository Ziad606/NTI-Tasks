import { Component } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private postService: PostService, private router: Router) {
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load posts. Please try again later.';
        this.loading = false;
        console.error('Error loading posts:', error);
      },
      complete: () => {
        console.log('Posts loaded successfully');
      },
    });
  }

  loadPosts() {
    this.loading = true;
    this.error = '';

    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load posts. Please try again later.';
        this.loading = false;
        console.error('Error loading posts:', error);
      },
      complete: () => {
        console.log('Posts loaded successfully');
      },
    });
  }

  viewDetails(postId: number) {
    console.log('Navigating to post details:', postId);
    this.router.navigate(['/posts', postId, 'edit-post']);
  }

  deletePost(postId: number) {
    console.log('Delete post:', postId);
    // TODO: Implement delete functionality
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId).subscribe({
        next: () => {
          console.log('Post deleted successfully');
          this.loadPosts(); // Reload the posts list
        },
        error: (error) => {
          console.error('Error deleting post:', error);
          alert('Failed to delete post');
        },
      });
    }
  }
}
