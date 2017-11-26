import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent {

  @Input() comment: Comment;

  constructor() { }

  ratingClass(rating: number) {
    if (rating > 0 && rating <= 5) { return 'low-rate-comment'; }
    if (rating > 5 && rating <= 9) { return 'medium-rate-comment'; }
    if (rating >= 10) { return 'high-rate-comment'; }
  }
}
