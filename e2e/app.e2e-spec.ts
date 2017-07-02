import { ConsafetyPage } from './app.po';

describe('consafety App', () => {
  let page: ConsafetyPage;

  beforeEach(() => {
    page = new ConsafetyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
