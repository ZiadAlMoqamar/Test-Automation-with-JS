const elements = {
    btnContactUs: '#contact-link',
    linkContactUs: "li[class='item'] a[title='Contact us']",
    inputFieldSearch: '#search_query_top',
    btnSearch: "button[name='submit_search']",
    headingEnteredSearch: '.lighter',
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
        enterSearchWord(word) {
            return this.setValue('@inputFieldSearch', word);
        }
    },
    {
        submitSearch() {
            return this.click('@btnSearch');
        }
    },
    {
        validatingSearchResults(searchWord) {
            browser.elements('css selector', '.right-block', function (result) {
                result.value.forEach(function (element, index) {
                    let i = index + 1;
                    browser.getAttribute(`#product_list > li:nth-child(${i}) > div > div.right-block > h5 > a`, 'title', function (result) {
                        this.verify.contains(result.value.toLowerCase(), searchWord);
                    });
                });
            });
            return this;
        }
    }
];
module.exports = {
    elements: elements,
    commands: commands,
    url: browser.globals.url,
};
