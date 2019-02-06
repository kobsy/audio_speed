chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [ new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostSuffix: 'zendesk.com' },
        css: ['audio']
      })],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});
