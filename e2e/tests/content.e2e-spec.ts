import { tenPlayers } from '../mock.data';
import { LocalStorage } from '../utils.e2e';
import { IPlayer } from './../../src/app/players.interface';
import { ComposeTeamsPage } from './../pages/compose-teams.po';
import { ContentPage } from './../pages/content.po';
import { LeftMenuPage } from './../pages/left-menu.po';
import { NavbarPage } from './../pages/navbar.po';

describe('Content page', () => {
  let contentPage: ContentPage;
  let leftMenuPage: LeftMenuPage;
  let navbarPage: NavbarPage;

  beforeEach(() => {
    const page = new ComposeTeamsPage();
    page.navigateTo();
    contentPage = page.getContentPage();
    leftMenuPage = page.getLeftMenuPage();
    navbarPage = page.getNavBarPage();
  });

  afterAll(() => {
    LocalStorage.clear();
  });

  it(`should display a message saying not enough player if < 10`, () => {
    expect(contentPage.msgNotEnoughPlayers.getText()).toEqual(
      `Not enough player to generate the possible games`
    );
  });

  it(`should add 10 players`, () => {
    const players = tenPlayers();

    for (const player of players) {
      leftMenuPage.addPlayerAndTest(player);
    }

    const playersDetails = leftMenuPage.getPlayersList().getPlayersDetails();

    expect(playersDetails).toEqual(players);
  });

  it(`should select the 10 players and display the generated games`, () => {
    const players = tenPlayers();
    const playersList = leftMenuPage.getPlayersList();

    for (const player of players) {
      playersList.selectPlayer(player.name);
    }

    expect(navbarPage.nbGames.getText()).toEqual('126 games available');
  });
});
