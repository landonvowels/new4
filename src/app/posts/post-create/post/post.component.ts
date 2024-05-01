import { Component } from '@angular/core';

import { PostService } from './../../post.service';
import {Post} from './../../post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(private postService: PostService) {}
  // uses new post service to add a post when button clicked
  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postService.addPost(post);
  }
}