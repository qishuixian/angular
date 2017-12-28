import { TellPage } from './app.po';

describe('tell App', function() {
  let page: TellPage;

  beforeEach(() => {
    page = new TellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
