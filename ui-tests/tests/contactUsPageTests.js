describe('Contact us page tests', ()=>{


    before(browser=>{
        browser.navigateTo(browser.globals.url);
        }
    );

    it('Open contact page successfully', browser =>{
        console.log('hello');
        }
    )

     after(browser => browser.end());
})