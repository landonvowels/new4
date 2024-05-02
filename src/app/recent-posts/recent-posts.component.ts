import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './../posts/post.model';
import { PostService } from './../posts/post.service';


@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css'
})

export class RecentPostsComponent implements OnInit {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.fetchRecentPostsFromServer();
    this.postsSub = this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
