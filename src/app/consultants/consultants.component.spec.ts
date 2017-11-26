import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { inject } from '@angular/core/testing';

import { ConsultantsComponent } from './consultants.component';
import { ConsultantsDataStoreService } from './../shared/data-store/consultants-data-store.service';
import { ConsultantsService} from './../shared/api/consultants.service';

describe('ConsultantsComponent', () => {
  let component: ConsultantsComponent;
  let fixture: ComponentFixture<ConsultantsComponent>;
  let compile: Function;
  let element;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [ ConsultantsComponent ],
      providers: [ConsultantsDataStoreService, ConsultantsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(ConsultantsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('ConsultantsComponent template', () => {
    it('it is a table', () => {
      compile();
      element = fixture.debugElement.nativeElement.querySelector('table');
      expect(element).not.toBeNull();
    });
    it('the table has as many rows as consultants', () => {
      compile();
      component.consultants = fakeConsultants;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
      expect(element.length).toBe(2);
    });
    it('each table row has a link to see consultant comments', () => {
       compile();
       component.consultants = fakeConsultants;
       fixture.detectChanges();
       element = fixture.debugElement.nativeElement.querySelector('tbody tr:first-child a');
       expect(element.getAttribute('href')).toBe('/comments/1');
       element = fixture.debugElement.nativeElement.querySelector('tbody tr:nth-child(2) a');
       expect(element.getAttribute('href')).toBe('/comments/2');
    });
  });

  describe('ConsultantsComponent class', () => {
    describe('.ngOnInit', () => {
      it('get consultants list', inject([ConsultantsService], (consultantsService: ConsultantsService) => {
        spyOn(consultantsService, 'getConsultantsList');
        compile();
        expect(consultantsService.getConsultantsList).toHaveBeenCalled();
      }));
      it('reacts to consultantsChanged event and set consultants', inject([ConsultantsDataStoreService], (consultantsDataStoreService: ConsultantsDataStoreService) => {
        compile();
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
  });
});
