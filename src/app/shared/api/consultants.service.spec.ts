import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { ConsultantsService } from './consultants.service';
import { ConsultantsDataStoreService} from './../../shared/data-store/consultants-data-store.service';

describe('ConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ConsultantsService, ConsultantsDataStoreService]
    });
  });

  describe('.getConsultantsList', () => {
    it('should call http://demopeople.exolever.com/api/consultants/ API', inject([ConsultantsService, Http], (service: ConsultantsService, http: Http) => {
      spyOn(http, 'get').and.returnValue({ subscribe: () => {} });
      service.getConsultantsList();
      expect(http.get).toHaveBeenCalledWith('http://demopeople.exolever.com/api/consultants/');
    }));
  });
  describe('.getConsultant', () => {
    it('should call http://demopeople.exolever.com/api/consultants/<consultant_id> API', inject([ConsultantsService, Http], (service: ConsultantsService, http: Http) => {
      spyOn(http, 'get').and.returnValue({ subscribe: () => {} });
      service.getConsultant('1');
      expect(http.get).toHaveBeenCalledWith('http://demopeople.exolever.com/api/consultants/1/');
    }));
  });
});
