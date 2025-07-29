import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      post
    );
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
