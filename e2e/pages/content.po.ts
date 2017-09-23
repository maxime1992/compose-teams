import { $ } from 'protractor';

export class ContentPage {
  public msgNotEnoughPlayers = $(`.msg-too-many-or-not-enough-players`);

  static get() {
    return new ContentPage();
  }
}
