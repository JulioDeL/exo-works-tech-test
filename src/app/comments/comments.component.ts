import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Consultant } from './../shared/models/consultant.model';
import { ConsultantsDataStoreService } from './../shared/data-store/consultants-data-store.service';
import { ConsultantsService } from './../shared/api/consultants.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  consultant: Consultant;
  subscription: Subscription;
  consultantId: string;

  constructor(private route: ActivatedRoute, private consultantsDataStoreService: ConsultantsDataStoreService, private consultantService: ConsultantsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.consultantId = params['id'];
          this.consultantService.getConsultant(this.consultantId);
        }
      );

    this.subscription = this.consultantsDataStoreService.consultantChanged.subscribe(
      (consultant: Consultant) => {
        this.consultant = consultant;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
