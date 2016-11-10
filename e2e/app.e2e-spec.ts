import { RouterBasicsPage } from './app.po';

describe('router-basics App', function() {
  let page: RouterBasicsPage;

  beforeEach(() => {
    page = new RouterBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
