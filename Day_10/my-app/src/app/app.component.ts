import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './features/posts/posts.component';
import { LoginComponent } from './features/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    PostsComponent,
    RouterOutlet,
    // ProductManagerComponent,
    // LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  name = 'Ziad';
  email = 'ziad@gmail.com';
}
