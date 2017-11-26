import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Comment } from './../models/comment.model';

const API_PATH = 'http://demopeople.exolever.com/api/comment/';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  create(comment: Comment) {
    return this.http.post(API_PATH, comment).subscribe(response => response);
  }
}
