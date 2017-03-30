import { SimpleReditClonePage } from './app.po';

describe('simple-redit-clone App', () => {
  let page: SimpleReditClonePage;

  beforeEach(() => {
    page = new SimpleReditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
