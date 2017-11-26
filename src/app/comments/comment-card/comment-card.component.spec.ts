import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCardComponent } from './comment-card.component';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;
  let compile: Function;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCardComponent, TimeAgoPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(CommentCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('CommentCardComponent class', () => {
    describe('.ratingClass', () => {
      it('return css class from rating', () => {
        compile();
        expect(component.ratingClass(0)).toBeUndefined();
        expect(component.ratingClass(2)).toEqual('low-rate-comment');
        expect(component.ratingClass(7)).toEqual('medium-rate-comment');
        expect(component.ratingClass(10)).toEqual('high-rate-comment');
      });
    });
  });
});
