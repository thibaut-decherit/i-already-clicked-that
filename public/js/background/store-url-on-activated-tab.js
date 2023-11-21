browser.tabs.onActivated.addListener(async ({tabId}) => {
    const tab = await browser.tabs.get(tabId);
    const newUrl = tab.url;

    const {urls} = await browser.storage.local.get({
        urls: []
    });
    urls.push(newUrl);

    /**
     * Probably a risk of race condition if multiple tabs are quickly focused. Some data might get overwritten.
     * Maybe use a centralized queue instead? In background.js and send data to it via events?
     */
    browser.storage.local.set({urls});
});
