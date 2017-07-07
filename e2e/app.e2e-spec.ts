import { ComposeTeamsPage } from './app.po';

describe('compose-teams App', () => {
  let page: ComposeTeamsPage;

  beforeEach(() => {
    page = new ComposeTeamsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
