import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Params } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { tick, inject } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { TimeAgoPipe } from 'time-ago-pipe';

import { ConsultantsDataStoreService } from './../shared/data-store/consultants-data-store.service';
import { ConsultantsService } from './../shared/api/consultants.service';
import { CommentsService } from './../shared/api/comments.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let element: Element;
  let compile: Function;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpModule],
      declarations: [ CommentsComponent, CommentsListComponent, AddCommentComponent, TimeAgoPipe, CommentCardComponent ],
      providers: [ConsultantsDataStoreService, ConsultantsService, CommentsService, { provide: ActivatedRoute, useValue: { params: Observable.of({id: 1}) } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(CommentsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('CommentsComponent template', () => {
    it('has comments list', () => {
      compile();
      element = fixture.debugElement.nativeElement;
      expect(element.querySelector('app-comments-list')).not.toBe(null);
    });
    it('has add comment', () => {
      compile();
      element = fixture.debugElement.nativeElement;
      expect(element.querySelector('app-add-comment')).not.toBe(null);
    });
  });

  describe('CommentsComponent class', () => {
    describe('.ngOnInit', () => {
      it('reacts to changes in route params and get consultant with param id', inject([ConsultantsService], (consultantsService: ConsultantsService) => {
        spyOn(consultantsService, 'getConsultant');
        compile();
        expect(component.consultantId).toBe(1);
        expect(consultantsService.getConsultant).toHaveBeenCalledWith(1);
      }));
      it('reacts to consultantChanged event and set consultant', inject([ConsultantsDataStoreService], (consultantsDataStoreService: ConsultantsDataStoreService) => {
        compile();
        const fakeConsultant = {
          id: 1,
          comments: [],
          created: '',
          modified: '',
          uuid: '',
          email: '',
          short_name: 'Fake',
          full_name: 'Consultant',
          date_joined: '',
          status: 'A',
          gender: 'M',
          short_me: 'I am a fake',
          location: 'Granada',
          profile_picture: ''
        };
        consultantsDataStoreService.setConsultant(fakeConsultant);
        expect(component.consultant).toEqual(fakeConsultant);
      }));
    });
    describe('.ngOnDestroy', () => {
      it('on destroy', () => {
        compile();
        spyOn(component.subscription, 'unsubscribe');
        component.ngOnDestroy();
        expect(component.subscription.unsubscribe).toHaveBeenCalledWith();
      });
    });
  });
});
