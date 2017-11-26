import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
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
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ConsultantsDataStoreService, ConsultantsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
