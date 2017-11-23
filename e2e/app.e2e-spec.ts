import { BlackListPage } from './app.po';

describe('black-list App', () => {
  let page: BlackListPage;

  beforeEach(() => {
    page = new BlackListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
