import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextModel } from '../models/word-data-model';

const textData: TextModel[] = [
  {
    "text": "racecar",
    "is_pure_palindrome": true,
    "is_palindrome": true
  },
  {
    "text": "A man, a plan, a canal: Panama.",
    "is_pure_palindrome": false,
    "is_palindrome": true
  },
  {
    "text": "A test",
    "is_pure_palindrome": false,
    "is_palindrome": false
  }
]

@Component({
  selector: 'app-list-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-words.component.html',
  styleUrl: './list-words.component.css'
})


export class ListWordsComponent {
 dataSource = textData;
}
