import { $, $$, browser, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

import { IPlayer } from './../../src/app/players.interface';

export class PlayersListPage {
  private playersRows = $$(`app-players md-table md-row`);

  static get() {
    return new PlayersListPage();
  }

  getPlayersDetails(): promise.Promise<IPlayer[]> {
    return this.getPlayersObjectAndElementFinderFromRow().then(players =>
      players.map(player => player.player)
    );
  }

  private getPlayerFromRow(row: ElementFinder): promise.Promise<IPlayer> {
    return promise
      .all([
        row.$(`.name`).getText(),
        row.$(`.grade`).getAttribute('value'),
        row.$(`.is-selected`).getAttribute('value'),
      ])
      .then(([name, grade, isSelected]) => ({
        name,
        grade: +grade,
        isSelected: !!isSelected,
      }));
  }

  updateGradePlayerByName(name: string, grade: number) {
    return this.getPlayerObjectAndElementFinderFromRow(name).then(player =>
      player.elementFinder
        .$(`.grade`)
        .clear()
        .then(() => player.elementFinder.$(`.grade`).sendKeys(grade))
    );
  }

  selectPlayer(name: string) {
    return this.getPlayerObjectAndElementFinderFromRow(name)
      .then(player => player.elementFinder.$(`.is-selected`))
      .then(elementFinder => {
        elementFinder.isSelected().then(isSelected => {
          if (!isSelected) {
            elementFinder.click();
          }
        });
      });
  }

  private getPlayerObjectAndElementFinderFromRow(
    name: string
  ): promise.Promise<{
    player: IPlayer;
    elementFinder: ElementFinder;
  }> {
    return this.getPlayersObjectAndElementFinderFromRow().then(players =>
      players.find(player => player.player.name === name)
    );
  }

  private getPlayersObjectAndElementFinderFromRow(): promise.Promise<
    {
      player: IPlayer;
      elementFinder: ElementFinder;
    }[]
  > {
    return this.playersRows
      .then((playersRows: ElementFinder[]) =>
        playersRows.map(playerRow => ({
          player: this.getPlayerFromRow(playerRow),
          elementFinder: playerRow,
        }))
      )
      .then(playersObj => {
        return promise.all(playersObj.map(p => p.player)).then(player =>
          player.map((p, index) => ({
            player: p,
            elementFinder: playersObj[index].elementFinder,
          }))
        );
      });
  }
}
