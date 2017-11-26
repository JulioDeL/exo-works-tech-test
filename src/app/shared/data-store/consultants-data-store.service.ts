import { Injectable } from '@angular/core';
import { Consultant } from './../models/consultant.model';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

@Injectable()
export class ConsultantsDataStoreService {
  private consultants: Consultant[];
  private consultant: Consultant;

  consultantsChanged = new Subject<Consultant[]>();
  consultantChanged = new Subject<Consultant>();

  setConsultants(consultants: Consultant[]) {
    this.consultants = consultants;
    this.consultantsChanged.next(this.consultants.slice());
  }

  setConsultant(consultant: Consultant) {
    const selectedConsultant = consultant;
    this.consultant = consultant;
    this.consultantChanged.next(selectedConsultant);
  }

  getConsultants(): Consultant[] {
    return this.consultants.slice();
  }

  getConsultant(): Consultant {
    const consultant = this.consultant;
    return consultant;
  }
}
