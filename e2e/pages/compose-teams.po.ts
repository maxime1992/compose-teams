import { browser } from 'protractor';

import { ContentPage } from './content.po';
import { LeftMenuPage } from './left-menu.po';
import { NavbarPage } from './navbar.po';

export class ComposeTeamsPage {
  navigateTo() {
    browser
      .manage()
      .window()
      .setSize(1280, 1024);

    return browser.get('/');
  }

  getNavBarPage() {
    return NavbarPage.get();
  }

  getLeftMenuPage() {
    return LeftMenuPage.get();
  }

  getContentPage() {
    return ContentPage.get();
  }
}
