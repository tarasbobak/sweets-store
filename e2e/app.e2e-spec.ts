import { SweetsStorePage } from './app.po';

describe('sweets-store App', () => {
  let page: SweetsStorePage;

  beforeEach(() => {
    page = new SweetsStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
