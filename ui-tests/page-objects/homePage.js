const elements = {
    btnContactUs: '#contact-link',
    linkContactUs: "li[class='item'] a[title='Contact us']",

};
const commands = [
    {
        goToContactUsPageViaHeaderButton() {
            this.click('@btnContactUs');
            return browser.page.contactUsPage();
        }
    },
    {
        goToContactUsPageViaFooterLink() {
            this.click('@linkContactUs');
            return browser.page.contactUsPage();
        }
    }
];
module.exports = {
    elements: elements,
    commands: commands,
    url: browser.globals.url,
};
