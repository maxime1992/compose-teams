import { $, browser, ExpectedConditions } from 'protractor';

import { IPlayer } from 'app/players.interface';
import { LocalStorage } from '../utils.e2e';
import { ComposeTeamsPage } from './../pages/compose-teams.po';
import { LeftMenuPage } from './../pages/left-menu.po';

describe('Left menu page', () => {
  let leftMenuPage: LeftMenuPage;

  beforeEach(() => {
    LocalStorage.clear();
  });

  beforeEach(() => {
    const page = new ComposeTeamsPage();
    page.navigateTo();
    leftMenuPage = page.getLeftMenuPage();
  });

  afterEach(() => {
    LocalStorage.clear();
  });

  it(`should close the form to add a player when clicking on cancel and display a message to invite the user to add some players`, () => {
    leftMenuPage.addPlayerForm.cancelBtn.click();

    expect(leftMenuPage.addPlayerForm.form.isPresent()).toBe(false);

    expect(leftMenuPage.noPlayersAtmMsg.msg1.getText()).toEqual(
      `You don't have any player at the moment`
    );
    expect(leftMenuPage.noPlayersAtmMsg.msg2.msg.getText()).toEqual(
      `You can add one`
    );
  });

  it(`should open the form to add a player from the text "You can add one"`, () => {
    leftMenuPage.addPlayerForm.cancelBtn.click();

    expect(leftMenuPage.addPlayerForm.form.isPresent()).toBe(false);

    leftMenuPage.noPlayersAtmMsg.msg2.addOnePlayerBtn.click();

    expect(leftMenuPage.addPlayerForm.form.isPresent()).toBe(true);
  });

  it(`should add a player and display him into the players list with his grade and not selected`, () => {
    const player: IPlayer = {
      name: 'Player 1',
      grade: 5.5,
      isSelected: false,
    };

    leftMenuPage.addPlayerAndTest(player);
  });
});
