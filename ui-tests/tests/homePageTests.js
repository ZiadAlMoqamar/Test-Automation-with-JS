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

    it('Searching with lower case dress should work correctly', (browser) => {
        const searchWord = 'dress';
        const searchUrlSnippet = 'search_query=dress&submit_search=';

        homePage
        .enterSearchWord(searchWord)
        .submitSearch()
        .assert.urlContains(searchUrlSnippet)
        .assert.visible('@headingEnteredSearch')
        .assert.textContains('@headingEnteredSearch', searchWord.toUpperCase());
    });

    it('Searching with upper case dress should work correctly', (browser) => {
        const searchWord = 'DRESS';
        const searchUrlSnippet = 'search_query=DRESS&submit_search=';

        homePage
        .enterSearchWord(searchWord)
        .submitSearch()
        .assert.urlContains(searchUrlSnippet)
        .assert.visible('@headingEnteredSearch')
        .assert.textContains('@headingEnteredSearch', searchWord.toUpperCase());
    });

    after((browser) => browser.end());
})