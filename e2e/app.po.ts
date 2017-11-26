import { browser, by, element } from 'protractor';

export class ExoWorksTechTestPage {
  navigateTo(url?: string) {
    return browser.get(url || '/');
  }

  getPageElement(selectorQuery: string) {
    return element(by.css(selectorQuery));
  }

  getBrowserUrl(timeout: number) {
    return browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then((url) => {
        return url;
      });
    }, timeout);
  }

  putBrowserToSleep(timeout: number) {
    return browser.sleep(timeout);
  }
}
