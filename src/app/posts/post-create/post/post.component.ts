 // post.component.ts
 import { Component } from '@angular/core';
 import { PostService } from './../../post.service';
 import { Post } from './../../post.model';
 import { Task } from './../../post.model';
 
 @Component({
   selector: 'app-post',
   templateUrl: './post.component.html',
   styleUrls: ['./post.component.css']
 })
 export class PostComponent {
   enteredTitle = '';
   enteredDate: Date; // Add enteredDate property
   enteredContent = '';
   newTaskDescription: string = '';
   tasks: Task[] = [];
   constructor(private postService: PostService) {}
 

   addTask() {
    if (this.newTaskDescription.trim() !== '') {
      this.tasks.push({ description: this.newTaskDescription, completed: false });
      this.newTaskDescription = '';
    }
  }

   onAddPost() {
     const post: Post = {
       title: this.enteredTitle,
       content: this.enteredContent, // Include date in content
       date: this.enteredDate, // Set date property
       tasks: this.tasks
     };
     this.postService.addPost(post);
   }
   
 }
