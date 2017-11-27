import { EventsAppPage } from './app.po';

describe('events-app App', () => {
  let page: EventsAppPage;

  beforeEach(() => {
    page = new EventsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
