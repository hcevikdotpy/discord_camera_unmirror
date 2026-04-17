const toggle = document.getElementById('toggleUnmirror');
const status = document.getElementById('status');

// Load saved state
chrome.storage.sync.get({ unmirrorEnabled: true }, (data) => {
  toggle.checked = data.unmirrorEnabled;
  updateStatus(data.unmirrorEnabled);
});

// Handle toggle
toggle.addEventListener('change', () => {
  const enabled = toggle.checked;
  chrome.storage.sync.set({ unmirrorEnabled: enabled });
  updateStatus(enabled);

  // Notify all Discord tabs
  chrome.tabs.query({
    url: [
      'https://discord.com/*',
      'https://canary.discord.com/*',
      'https://ptb.discord.com/*'
    ]
  }, (tabs) => {
    for (const tab of tabs) {
      chrome.tabs.sendMessage(tab.id, { unmirrorEnabled: enabled });
    }
  });
});

function updateStatus(enabled) {
  status.textContent = enabled
    ? 'Your camera is shown un-mirrored'
    : 'Your camera is shown mirrored (default)';
}
