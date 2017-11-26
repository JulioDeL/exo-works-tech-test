import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { ConsultantsService} from './shared/api/consultants.service';
import { CommentsService} from './shared/api/comments.service';
import { ConsultantsDataStoreService} from './shared/data-store/consultants-data-store.service';
import { CommentCardComponent } from './comments/comment-card/comment-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ConsultantsComponent,
        CommentsComponent,
        TimeAgoPipe,
        CommentsListComponent,
        AddCommentComponent,
        CommentCardComponent,
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [ConsultantsDataStoreService, ConsultantsService, CommentsService],
    }).compileComponents();
  }));

  describe('AppComponent template', () => {
    it('renders app structure', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const compiled = fixture.debugElement.nativeElement;
      fixture.detectChanges();
      expect(compiled.querySelector('app-header')).toBeTruthy();
      expect(compiled.querySelector('div.container-fluid.app-container')).toBeTruthy();
      expect(compiled.querySelector('div.container-fluid.app-container router-outlet')).toBeTruthy();
    });
  });
});
