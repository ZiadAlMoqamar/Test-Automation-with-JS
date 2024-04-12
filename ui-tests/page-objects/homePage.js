const elements = {
    btnContactUs: '#contact-link',
    linkContactUs: "li[class='item'] a[title='Contact us']",
    inputFieldSearch: '#search_query_top',
    btnSearch: "button[name='submit_search']",
    headingEnteredSearch: '.lighter'
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
    },
    {
        enterSearchWord(word){
            return this.setValue('@inputFieldSearch', word);
        }
    },
    {
        submitSearch(){
            return this.click('@btnSearch');
        }
    }
];
module.exports = {
    elements: elements,
    commands: commands,
    url: browser.globals.url,
};
