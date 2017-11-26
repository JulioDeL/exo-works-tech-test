import { Component, Input } from '@angular/core';
import { Comment } from './../../shared/models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent {

  @Input() comments: Comment[];

  constructor() { }
}
