import { AllthethingsPage } from './app.po';

describe('allthethings App', () => {
  let page: AllthethingsPage;

  beforeEach(() => {
    page = new AllthethingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
