describe('Contact us page tests', () => {
    const email = 'test@hello.com';
    const invalidEmailError = 'Invalid email address.';
    const successMessage = 'Your message has been successfully sent to our team.';
    const message = 'I am Ziad';

    let homePage = null;
    let contactUsPage = null;
    
    before((browser) => {
        homePage = browser.page.homePage();
        contactUsPage = homePage.navigate().goToContactUsPage();
    });

    beforeEach((browser) => {
        contactUsPage = homePage.goToContactUsPage();
    });

    it('Should open contact page successfully', (browser) => {
        const contactUsPageTitle = 'Contact us - My Store';

        contactUsPage.assert.titleEquals(contactUsPageTitle);
    });

    it('Submitting message without email should show error alert', (browser) => {

        contactUsPage
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', invalidEmailError);
    });

    it('Submitting message with invalid email should show error alert', (browser) => {
        const invalidEmail = 'test.com';

        contactUsPage
            .enterEmail(invalidEmail)
            .enterMessage(message)
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', invalidEmailError);
    });

    it('Submitting messsage with blank message field should show error alert', (browser) => {
        const blankMessageError = 'The message cannot be blank.';

        contactUsPage
            .enterEmail(email)
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', blankMessageError);
    });

    it('Submitting message without choosing subject should show error alert', (browser) => {
        const missingSubjectError = 'Please select a subject from the list provided.';

        contactUsPage
            .enterEmail(email)
            .enterMessage(message)
            .submitMessage()
            .assert.visible('@divErrorAlert')
            .assert.textContains('@divErrorAlert', missingSubjectError);
    });

    it('Submitting message with required fields should show success alert', (browser) => {
        const subject = 'Customer service';
        const visibleDescTitleForCustomerServiceSubject = 'For any question about a product, an order';

        contactUsPage
            .enterEmail(email)
            .enterMessage(message)
            .chooseSubject(subject)
            .assert.visible('@descTitleCustomerService')
            .assert.textContains('@descTitleCustomerService', visibleDescTitleForCustomerServiceSubject)
            .submitMessage()
            .assert.visible('@divSuccessAlert')
            .assert.textContains('@divSuccessAlert', successMessage);
    });

    it('Submitting message with all fields and attaching file should show success alert', (browser) => {
        const subject = 'Webmaster';
        const visibleDescTitleForWebmaster = 'If a technical problem occurs on this website';
        const orderReference = 'dew214';
        const attachedFilePath = '../assets/uploadfile.txt';

        contactUsPage
            .enterEmail(email)
            .enterMessage(message)
            .chooseSubject(subject)
            .assert.visible('@descTitleWebmaster')
            .assert.textContains('@descTitleWebmaster', visibleDescTitleForWebmaster)
            .enterOrderReference(orderReference)
            .AttachFile(attachedFilePath)
            .submitMessage()
            .assert.visible('@divSuccessAlert')
            .assert.textContains('@divSuccessAlert', successMessage);
    });

    after((browser) => browser.end());
});
