document.querySelectorAll('a[data-speed]').forEach(function(speedLink) {
  speedLink.onclick = function(e) {
    let speed = parseFloat(e.target.getAttribute('data-speed'));
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.querySelectorAll("audio").forEach(function(audio) { audio.playbackRate = ' + speed + '; });'
      });
    });
  }
});
