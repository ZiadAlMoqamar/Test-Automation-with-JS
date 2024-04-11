describe('Contact us page tests', () => {
    let homePage = null;
    let contactUsPage = null;
    beforeEach((browser) => {
        homePage = browser.page.homePage();
        contactUsPage = homePage.navigate().goToContactUsPage();
    });

    it('Should open contact page successfully', (browser) => {
        const contactUsPageTitle = 'Contact us - My Store';

        contactUsPage.assert.titleEquals(contactUsPageTitle);
    });

    it('Submitting message without email should show alert', (browser) => {
        const email = 'test@hello.com';
        const missingEmailError = 'Invalid email address.';

        contactUsPage
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', missingEmailError)
            .saveScreenshot('./tests_output/screenshots/missingEmailErrortest.png');
    });

    it('Submitting messsage with blank message field should show alert', (browser) => {
        const email = 'test@hello.com';
        const blankMessageError = 'The message cannot be blank.';

        contactUsPage
            .enterEmail(email)
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', blankMessageError)
            .saveScreenshot('./tests_output/screenshots/blankMessageErrortest.png');
    });

    afterEach((browser) => browser.end());
});
