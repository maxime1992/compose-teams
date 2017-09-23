import { browser } from 'protractor';

export class LocalStorage {
  static getValue(key) {
    return browser.executeScript(
      `return window.localStorage.getItem('${key}');`
    );
  }

  static get() {
    browser.executeScript(`return window.localStorage;`);
  }

  static clear() {
    browser.executeScript(`return window.localStorage.clear();`);
  }
}
