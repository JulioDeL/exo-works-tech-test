import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Comment } from './../../shared/models/comment.model';

import { CommentsListComponent } from './comments-list.component';
import { CommentCardComponent } from './../comment-card/comment-card.component';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;
  let compile: Function;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsListComponent, CommentCardComponent, TimeAgoPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(CommentsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('CommentsListComponent template', () => {
    it('creates one card comment per consultant comment', () => {
      compile();
      const comment1 = {
        id: 1,
        created: '',
        modified: '',
        subject: 'Review',
        body: 'Comment body',
        status: 'V',
        rating: 8,
        user: 'me',
        consultant: 5
      };
      const comment2 = {
        id: 2,
        created: '',
        modified: '',
        subject: 'Review2',
        body: 'Comment body 2',
        status: 'A',
        rating: 2,
        user: 'me as well',
        consultant: 2
      };
      component.comments = [comment1, comment2];
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement;
      expect(element.querySelectorAll('app-comment-card').length).toBe(2);
    });
  });
});
