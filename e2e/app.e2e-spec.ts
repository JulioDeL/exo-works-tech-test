import { ExoWorksTechTestPage } from './app.po';

describe('exo-works-tech-test App', () => {
  let page: ExoWorksTechTestPage;

  beforeEach(() => {
    page = new ExoWorksTechTestPage();
  });

  describe('Landing page', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('url should be /consultants', () => {
      page.getBrowserUrl(3000).then(url => {
        expect(url).toMatch(/\/consultants$/);
      });
    });

    it('on click on view comments link, it redirects to /comments/<consultant_id>', () => {
      page.putBrowserToSleep(3500).then(() => {
        page.getPageElement('tbody tr:first-child a').click();
        page.getBrowserUrl(3000).then(url => {
          expect(url).toMatch(/\/comments\/1$/);
        });
      });
    });
  });

  describe('Comments page', () => {
    beforeEach(() => {
      page.navigateTo('/comments/1');
    });

    it('it is possible to enter a comment', () => {
      page.putBrowserToSleep(3500).then(() => {
        page.getPageElement('form input[name="subject"]').sendKeys('This is a e2e test');
        page.getPageElement('form textarea[name="body"]').sendKeys('Proving it is possible to insert a comment');
        page.getPageElement('form select[name="status"]').sendKeys('V');
        page.getPageElement('form input[name="rating"]').sendKeys(5);
        page.getPageElement('form input[name="user"]').sendKeys('me again');
        page.getPageElement('form select[name="consultant"]').sendKeys('1');
        page.getPageElement('form button[role="submit"]').click();
      });
    });
  });
});
