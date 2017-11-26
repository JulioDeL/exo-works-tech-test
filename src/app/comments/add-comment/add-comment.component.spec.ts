import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddCommentComponent } from './add-comment.component';
import { CommentsService } from './../../shared/api/comments.service';
import { ConsultantsService} from './../../shared/api/consultants.service';
import { ConsultantsDataStoreService } from './../../shared/data-store/consultants-data-store.service';
import { inject } from '@angular/core/testing';

describe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;
  let compile: Function;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [AddCommentComponent],
      providers: [ConsultantsService, ConsultantsDataStoreService, CommentsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(AddCommentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('AddCommentComponent template', () => {
    beforeEach(() => {
      compile();
      element = fixture.debugElement.nativeElement.querySelector('form');
    });
    it('is a form', () => {
      expect(element).not.toBe(null);
    });
    it('form contains subject field', () => {
      compile();
      expect(element.querySelector('input[name="subject"]')).not.toBe(null);
    });
    it('form contains body field', () => {
      compile();
      expect(element.querySelector('textarea[name="body"]')).not.toBe(null);
    });
    it('form contains status field', () => {
      compile();
      expect(element.querySelector('select[name="status"]')).not.toBe(null);
    });
    it('form contains rating field', () => {
      compile();
      expect(element.querySelector('input[name="rating"]')).not.toBe(null);
    });
    it('form contains user field', () => {
      compile();
      expect(element.querySelector('input[name="user"]')).not.toBe(null);
    });
    it('form contains consultant field', () => {
      compile();
      expect(element.querySelector('select[name="consultant"]')).not.toBe(null);
    });
    it('form contains send button', () => {
      compile();
      expect(element.querySelector('button[role="submit"]')).not.toBe(null);
    });
  });

  describe('AddCommentComponent class', () => {
     describe('.ngOnInit', () => {
       it('get consultants list', inject([ConsultantsService], (consultantsService: ConsultantsService) => {
        spyOn(consultantsService, 'getConsultantsList');
        compile();
        expect(consultantsService.getConsultantsList).toHaveBeenCalled();
       }));
       it('set possible comments statuses', () => {
        compile();
        expect(component.commentStatuses).toEqual([{value: 'N', label: 'No Validated'}, {value: 'V', label: 'Verified'}, {value: 'D', label: 'Discarded'}]);
       });
       it('reacts to consultantsChanged event and set consultants', inject([ConsultantsDataStoreService], (consultantsDataStoreService: ConsultantsDataStoreService) => {
        compile();
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
        consultantsDataStoreService.setConsultants(fakeConsultants);
        expect(component.consultants).toEqual(fakeConsultants);
      }));
     });
     describe('.ngOnDestroy', () => {
      it('on destroy', () => {
        compile();
        spyOn(component.subscription, 'unsubscribe');
        component.ngOnDestroy();
        expect(component.subscription.unsubscribe).toHaveBeenCalledWith();
      });
     });
     describe('.onSubmit', () => {
      it('does not create the comment if form is not valid', inject([CommentsService], (commentsService: CommentsService) => {
        spyOn(commentsService, 'create');
        compile();
          const stubForm = <NgForm> {
            valid: false
        };
        component.onSubmit(stubForm);
        expect(commentsService.create).not.toHaveBeenCalled();
      }));
      it('creates the comment if form is valid', inject([CommentsService], (commentsService: CommentsService) => {
        spyOn(commentsService, 'create');
        compile();
          const valueForm = { subject: 'testSubject', body: 'testBody', status: 'Status', rating: 4 };
          const stubForm = <NgForm> {
            valid: true,
            value: valueForm
        };
        component.onSubmit(stubForm);
        expect(commentsService.create).toHaveBeenCalledWith(valueForm);
      }));
      it('reset form after creating comment', () => {
        compile();
        spyOn(component.templateForm, 'resetForm');
        const stubForm = <NgForm> { valid: true };
        component.onSubmit(stubForm);
        expect(component.templateForm.resetForm).toHaveBeenCalled();
      });
    });
  });
});
