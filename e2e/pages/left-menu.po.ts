import { $ } from 'protractor';

import { IPlayer } from './../../src/app/players.interface';
import { PlayersListPage } from './players-list.po';

export class LeftMenuPage {
  nbPlayers = $(`.nb-players`);
  private addPlayerBtn = $(`.add-player`);
  private _addPlayerForm = $(`.add-player-form`);
  addPlayerForm = {
    form: this._addPlayerForm,
    input: this._addPlayerForm.$(`input`),
    addBtn: this._addPlayerForm.$(`.add-btn`),
    cancelBtn: this._addPlayerForm.$(`.cancel-btn`),
  };
  private _noPlayersAtmMsg = $(`.no-player-atm`);
  noPlayersAtmMsg = {
    msg1: this._noPlayersAtmMsg.$$(`p`).get(0),
    msg2: {
      msg: this._noPlayersAtmMsg.$$(`p`).get(1),
      addOnePlayerBtn: this._noPlayersAtmMsg
        .$$(`p`)
        .get(1)
        .$(`.cursor-pointer`),
    },
  };

  static get() {
    return new LeftMenuPage();
  }

  getPlayersList() {
    return PlayersListPage.get();
  }

  addPlayerAndTest(player: IPlayer) {
    return this.addPlayerBtn
      .isPresent()
      .then(isAddPlayerBtnPresent => {
        if (isAddPlayerBtnPresent) {
          this.addPlayerBtn.click();
        }
      })
      .then(() => {
        this.addPlayerForm.input.sendKeys(player.name);
        this.addPlayerForm.addBtn.click();

        this.getPlayersList().updateGradePlayerByName(
          player.name,
          player.grade
        );

        expect(this.getPlayersList().getPlayersDetails()).toContain(
          player,
          'Player was not added correctly'
        );
      });
  }
}
