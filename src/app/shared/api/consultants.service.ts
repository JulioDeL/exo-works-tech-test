import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Consultant } from './../models/consultant.model';
import { ConsultantsDataStoreService } from './../../shared/data-store/consultants-data-store.service';

const API_PATH = 'http://demopeople.exolever.com/api/consultants/';

@Injectable()
export class ConsultantsService {
  private consultants: Consultant[];

  constructor(private http: Http, private consultantsDataStoreService: ConsultantsDataStoreService) { }

  getConsultant(id: string) {
    return this.http.get(this.url(id))
    .subscribe(
      (response: Response) => {
        const consultant: Consultant = response.json();
        this.consultantsDataStoreService.setConsultant(consultant);
      }
    );
  }

  getConsultantsList() {
    return this.http.get(this.url())
    .subscribe(
      (response: Response) => {
        const consultants: Consultant[] = response.json();
        this.consultantsDataStoreService.setConsultants(consultants);
      }
    );
  }

  private url(id?: string) {
    let url = 'http://demopeople.exolever.com/api/consultants/';
    if (id) { url += `${id}/`; }
    return url;
  }
}

