import { $ } from 'protractor';

export class NavbarPage {
  nbGames = $(`.nb-games`);

  static get() {
    return new NavbarPage();
  }
}
