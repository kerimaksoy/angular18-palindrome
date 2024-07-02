import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListWordsComponent } from './list-words/list-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListWordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18-palindrome-checker';
}
