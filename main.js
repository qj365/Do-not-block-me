changeURL = function (word) {
    var query = word.linkUrl;
    chrome.tabs.create({
        url: 'https://freedium.cfd/' + query,
    });
};

chrome.contextMenus.create({
    title: 'Open with Donotblockme',
    contexts: ['link'], // ContextType
    onclick: changeURL, // A callback function
});
