import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConsultantsService } from './../api/consultants.service';
import { ConsultantsDataStoreService} from './../../shared/data-store/consultants-data-store.service';

describe('ConsultantService', () => {
  const fakeConsultants = [{
    id: 1,
    comments: [],
    created: '',
    modified: '',
    uuid: '',
    email: 'first@gmail.com',
    short_name: 'Fake',
    full_name: 'Consultant',
    date_joined: '',
    status: 'A',
    gender: 'M',
    short_me: 'I am a fake',
    location: 'Granada',
    profile_picture: ''
  },
  {
    id: 2,
    comments: [],
    created: '',
    modified: '',
    uuid: '',
    email: 'second@gmail.com',
    short_name: 'Fake',
    full_name: 'Consultant',
    date_joined: '',
    status: 'A',
    gender: 'M',
    short_me: 'I am a fraud',
    location: 'Granada',
    profile_picture: ''
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultantsService, ConsultantsDataStoreService],
      imports: [HttpModule]
    });
  });

  describe('.setConsultants', () => {
    it('.stores consultants and submit consultantsChanged event', inject([ConsultantsDataStoreService], (service: ConsultantsDataStoreService) => {
      spyOn(service.consultantsChanged, 'next');
      service.setConsultants(fakeConsultants);
      expect(service.consultantsChanged.next).toHaveBeenCalledWith(fakeConsultants);
    }));
  });

  describe('.setConsultant', () => {
    it('.stores consultant and submit consultantChanged event', inject([ConsultantsDataStoreService], (service: ConsultantsDataStoreService) => {
      spyOn(service.consultantChanged, 'next');
      service.setConsultant(fakeConsultants[0]);
      expect(service.consultantChanged.next).toHaveBeenCalledWith(fakeConsultants[0]);
    }));
  });

  describe('.getConsultants', () => {
    it('.returns stored consultants', inject([ConsultantsDataStoreService], (service: ConsultantsDataStoreService) => {
      service.setConsultants(fakeConsultants);
      expect(service.getConsultants()).toEqual(fakeConsultants);
    }));
  });

   describe('.getConsultant', () => {
    it('.returns selected consultant', inject([ConsultantsDataStoreService], (service: ConsultantsDataStoreService) => {
      service.setConsultant(fakeConsultants[0]);
      expect(service.getConsultant()).toEqual(fakeConsultants[0]);
    }));
  });
});
