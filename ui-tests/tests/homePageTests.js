describe('Home page tests', () => {
    let homePage = null;

    beforeEach((browser) => {
        homePage = browser.page.homePage()
            .navigate();
    });

    it('Should open home page successfully', (browser) => {
        const homePageTitle = 'My Store';

        homePage.assert.titleEquals(homePageTitle);
    });
})