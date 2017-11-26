import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compile: Function;
  let element: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    compile = () => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    };
  });

  describe('HeaderComponent template', () => {
    beforeEach(() => {
      compile();
      element = fixture.debugElement.nativeElement;
    });
    it('is a navbar', () => {
      expect(element.querySelector('nav[role="navigation"]')).not.toBeNull();
    });
    it('app logo routes to root path', () => {
      expect(element.querySelector('nav[role="navigation"] > a').getAttribute('routerlink')).toBe('/');
    });
    it('consultants link routes to consultants path', () => {
      expect(element.querySelector('nav[role="navigation"] ul.navbar-nav li.nav-item a:first-child').getAttribute('routerlink')).toBe('/consultants');
    });
  });
});
