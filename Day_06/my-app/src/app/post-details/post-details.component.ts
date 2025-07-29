import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  postId: number = 0;
  post: Post = {} as Post;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = Number(params['id']);
      console.log('Post ID from route:', this.postId);
      this.loadPost();
    });
  }

  loadPost() {
    this.loading = true;
    this.error = '';

    console.log('Loading post with ID:', this.postId);

    this.postService.getPostById(this.postId).subscribe({
      next: (post) => {
        console.log('Post loaded successfully:', post);
        this.post = post;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading post:', err);
        this.error = 'Failed to load post details';
        this.loading = false;
      },
    });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe({
      next: () => {
        console.log('Post deleted successfully');
        this.router.navigate(['/posts']);
      },
    });
  }
}
