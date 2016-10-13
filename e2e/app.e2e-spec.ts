import { TcguiPage } from './app.po';

describe('tcgui App', function() {
  let page: TcguiPage;

  beforeEach(() => {
    page = new TcguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
