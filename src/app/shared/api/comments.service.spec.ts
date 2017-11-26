import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CommentsService]
    });
  });

  describe('.create', () => {
    it('should call POST http://demopeople.exolever.com/api/comment/ API', inject([CommentsService, Http], (service: CommentsService, http: Http) => {
      spyOn(http, 'post').and.returnValue({ subscribe: () => {} });
      const comment = { subject: 'testSubject', body: 'testBody', status: 'Status', rating: 4, user: 'me', consultant: 1 };
      service.create(comment);
      expect(http.post).toHaveBeenCalledWith('http://demopeople.exolever.com/api/comment/', comment);
    }));
  });
});
