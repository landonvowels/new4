import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  // used by post-list component to grab post from server
  fetchServerPost() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      }, error => {
        console.error('Failed to fetch posts from server', error);
      });
  }

  // Returns an observable for components to subscribe to posts.
  // used by post-list component
  getPosts() {
    return this.postsUpdated.asObservable();
  }

  // used by post component, when button pressed
  addPost(post: Post) {
    this.posts.push(post);
    // here is use of spread operator to update the copy of array
    this.postsUpdated.next([...this.posts]);
  }

}