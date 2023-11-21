const blacklist = ['test', 'test2'];

const removeBlacklistedParameters = details => {
    let shouldRedirect = false;
    const oldUrl = details.url;
    const newUrl = new URL(oldUrl);

    blacklist.forEach(parameter => {
        if (newUrl.searchParams.has(parameter)) {
            newUrl.searchParams.delete(parameter);
            shouldRedirect = true;
        }
    });

    if (shouldRedirect) {
        return {
            redirectUrl: newUrl.href
        };
    }

    return {};
};

browser.webRequest.onBeforeRequest.addListener(
    removeBlacklistedParameters,
    {urls: ['<all_urls>']},
    ['blocking']
);
