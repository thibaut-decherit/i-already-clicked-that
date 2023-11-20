browser.tabs.onUpdated.addListener(tabId => {
    browser.tabs.insertCSS(tabId, {
        allFrames: true,
        cssOrigin: 'user',
        file: '/css/css-injection-on-updated-tab.css',
        runAt: 'document_start'
    });
});
