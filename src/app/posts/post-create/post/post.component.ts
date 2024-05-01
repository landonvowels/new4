// post.component.ts
import { Component } from '@angular/core';
import { PostService } from './../../post.service';
import { Post } from './../../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  enteredTitle = '';
  enteredDate: Date; // Add enteredDate property
  enteredContent = '';

  constructor(private postService: PostService) {}

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: `${this.enteredContent} Date: ${this.enteredDate}`, // Include date in content
      date: this.enteredDate // Set date property
    };
    this.postService.addPost(post);
  }


  placeholderToLabel(placeholder: string): string {
    switch (placeholder) {
      case 'Project Name':
        return 'Project Name';
      case 'Description':
        return 'Description (optional)';
      case 'Deadline':
        return 'Deadline (optional)';
      default:
        return '';
    }
}

}
