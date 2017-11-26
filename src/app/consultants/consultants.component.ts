import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Consultant } from './../shared/models/consultant.model';
import { ConsultantsDataStoreService } from './../shared/data-store/consultants-data-store.service';
import { ConsultantsService} from './../shared/api/consultants.service';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit, OnDestroy {
  consultants: Consultant[];
  subscription: Subscription;

  constructor(private consultantsDataStoreService: ConsultantsDataStoreService, private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.consultantsService.getConsultantsList();
    this.subscription = this.consultantsDataStoreService.consultantsChanged.subscribe(
      (consultants: Consultant[]) => {
        this.consultants = consultants;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
