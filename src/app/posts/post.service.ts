// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post.model';
import { Task } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {}

  addPost(post: Post) {
    this.http.post<{ message: string, postId: string }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        post._id = responseData.postId; // Set the received _id
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      }, error => {
        console.error('Failed to add post:', error);
      });
  }

  addTaskToPost(postId: string, task: Task) {
    return this.http.post<Post>(`http://localhost:3000/api/post/${postId}/tasks`, task);
  }

  updateTaskStatus(postId: string, taskId: string, completed: boolean) {
    return this.http.patch(`http://localhost:3000/api/posts/${postId}/tasks/${taskId}`, { completed });
  }

  fetchPostsFromServer() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((response) => {
        this.posts = response.posts; // Ensure the _id field is preserved
        this.postsUpdated.next([...this.posts]);
      }, error => {
        console.error('Failed to fetch posts:', error);
      });
  }

  fetchRecentPostsFromServer() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts/recent')
      .subscribe((response) => {
        this.posts = response.posts; // Ensure the _id field is preserved
        this.postsUpdated.next([...this.posts]);
      }, error => {
        console.error('Failed to fetch posts:', error);
      });
  }


  getPosts() {
    return this.postsUpdated.asObservable();
  }

  deletePost(postId: string) {
    this.http.delete<{ message: string }>(`http://localhost:3000/api/posts/${postId}`)
      .subscribe(() => {
        // Convert postId to string if necessary
        postId = String(postId); 
        this.posts = this.posts.filter(post => post._id !== postId);
        this.postsUpdated.next([...this.posts]);
      }, error => {
        console.error('Failed to delete post:', error);
      });
  }
  
}
  
