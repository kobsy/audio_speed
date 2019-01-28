function updateActiveForSpeed(speed) {
  let oldElement = document.querySelector('.active');
  if(oldElement) oldElement.classList.remove('active');
  let activeElement = document.querySelector('a[data-speed="' + speed.toFixed(1) + '"]');
  if(activeElement) activeElement.classList.add('active');
}

chrome.storage.sync.get('speed', function(data) {
  updateActiveForSpeed(data.speed);
});

document.querySelectorAll('a[data-speed]').forEach(function(speedLink) {
  speedLink.onclick = function(e) {
    let speed = parseFloat(e.target.getAttribute('data-speed'));
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.querySelectorAll("audio").forEach(function(audio) { audio.playbackRate = ' + speed + '; });'
      });
    });

    chrome.storage.sync.set({ speed: speed });
    updateActiveForSpeed(speed);
  }
});
