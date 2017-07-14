import { MusicClubPage } from './app.po';

describe('music-club App', () => {
  let page: MusicClubPage;

  beforeEach(() => {
    page = new MusicClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
