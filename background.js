chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ speed: 1.0 }, function() {
    console.log("Playback set to 1x");
  });

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
