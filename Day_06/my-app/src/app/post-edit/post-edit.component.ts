import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  postId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = Number(params['id']);
      this.loadPost();
    });
  }

  loadPost() {
    this.postService.getPostById(this.postId).subscribe((post) => {
      this.postForm.patchValue({
        title: post.title,
        body: post.body,
      });
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const updatedPost: Post = {
        id: this.postId,
        userId: 1, // Default user ID
        title: this.postForm.value.title,
        body: this.postForm.value.body,
      };

      this.postService.updatePost(this.postId, updatedPost).subscribe(() => {
        this.router.navigate(['/posts', this.postId]);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/posts', this.postId]);
  }
}
