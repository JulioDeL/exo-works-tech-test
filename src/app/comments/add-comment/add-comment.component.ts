import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { Consultant } from './../../shared/models/consultant.model';
import { Comment } from './../../shared/models/comment.model';
import { ConsultantsDataStoreService } from './../../shared/data-store/consultants-data-store.service';
import { CommentsService } from './../../shared/api/comments.service';
import { ConsultantsService} from './../../shared/api/consultants.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit, OnDestroy {
  @ViewChild('commentForm') templateForm: NgForm;

  consultants: Consultant[];
  subscription: Subscription;
  commentStatuses: [{value: string, label: string}];

  constructor(private consultantsDataStoreService: ConsultantsDataStoreService, private commentsService: CommentsService, private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.consultantsService.getConsultantsList();
    this.commentStatuses = [{value: 'N', label: 'No Validated'}, {value: 'V', label: 'Verified'}, {value: 'D', label: 'Discarded'}];
    this.subscription = this.consultantsDataStoreService.consultantsChanged.subscribe(
      (consultants: Consultant[]) => {
        this.consultants = consultants;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) { return; }
    this.commentsService.create(form.value);
    this.templateForm.resetForm();
  }
}
