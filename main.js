searchUrbanDict = function (word) {
    var query = word.linkUrl;
    chrome.tabs.create({
        url: 'https://donotblock.me/' + query,
    });
};

chrome.contextMenus.create({
    title: 'Open with Donotblockme',
    contexts: ['link'], // ContextType
    onclick: searchUrbanDict, // A callback function
});
