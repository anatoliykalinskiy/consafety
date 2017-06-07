import { ConsafetyPage } from './app.po';

describe('consafety App', () => {
  let page: ConsafetyPage;

  beforeEach(() => {
    page = new ConsafetyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
