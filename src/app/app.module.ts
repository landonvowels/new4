import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post-create/post/post.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
<<<<<<< HEAD
import { TaskListComponent } from './task-list/task-list.component';
=======
import { FooterComponent } from './footer/footer/footer.component';
>>>>>>> origin/main

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    PostListComponent,
<<<<<<< HEAD
    TaskListComponent
=======
    FooterComponent
>>>>>>> origin/main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
