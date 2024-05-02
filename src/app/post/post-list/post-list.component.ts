import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './../../posts/post.model';
import { PostService } from './../../posts/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.fetchPostsFromServer();
    this.postsSub = this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // Function to delete a post
  deletePost(postId: string) {
    this.postService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
