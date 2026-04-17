const UNMIRROR_CSS_ID = 'discord-unmirror-style';

const UNMIRROR_CSS = `
  video[class*="mirror__"] {
    transform: scaleX(1) !important;
  }
  div[class*="mirror__"] {
    transform: scaleX(1) !important;
  }
`;

function applyUnmirror() {
  if (document.getElementById(UNMIRROR_CSS_ID)) return;
  const style = document.createElement('style');
  style.id = UNMIRROR_CSS_ID;
  style.textContent = UNMIRROR_CSS;
  (document.head || document.documentElement).appendChild(style);
}

function removeUnmirror() {
  const style = document.getElementById(UNMIRROR_CSS_ID);
  if (style) style.remove();
}

// Load initial state
chrome.storage.sync.get({ unmirrorEnabled: true }, (data) => {
  if (data.unmirrorEnabled) {
    applyUnmirror();
  }
});

// Listen for toggle changes from popup
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.unmirrorEnabled !== undefined) {
    if (msg.unmirrorEnabled) {
      applyUnmirror();
    } else {
      removeUnmirror();
    }
  }
});
