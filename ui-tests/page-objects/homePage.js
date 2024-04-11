const elements = {
    btnContactUs: '#contact-link',
};
const commands = [
    {
        goToContactUsPage() {
            this.click('@btnContactUs');
            return browser.page.contactUsPage();
        },
    },
];
module.exports = {
    elements: elements,
    commands: commands,
    url: browser.globals.url,
};
