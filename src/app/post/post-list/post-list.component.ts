import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from './../../posts/post.service';
import { Post } from './../../posts/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private postService: PostService) {}

  // OnInit function which uses new subscription (works as observer), to get posts
  ngOnInit() {
    this.postService.fetchPostsFromServer(); // Fixed method name
    this.postsSub = this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // this handles the memory leak issue with subscriptions, unsubscribes on destroy
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}