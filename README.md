# Discord Camera Unmirror

A lightweight Chrome extension that removes the horizontal flip (mirror effect) from your own camera feed in Discord video calls.

By default, Discord mirrors your camera so it looks like a reflection. This is a deliberate UX choice, but some users prefer to see themselves as others see them — un-mirrored. Discord doesn't offer a setting to change this, so this extension fills that gap.

## Features

- Removes the mirror effect from your camera feed in Discord video calls
- Works in gallery view, focused/large view, and popout windows
- One-click toggle via the toolbar popup to switch between mirrored and un-mirrored

## Install

### Chrome Web Store

Install directly from the [Chrome Web Store](https://not-yet-published).

### Manual Installation

1. Download or clone this repository
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** using the toggle in the top right corner
4. Click **Load unpacked**
5. Select the `discord-unmirror-extension` folder
6. Pin the extension by clicking the puzzle piece icon in the Chrome toolbar and pinning "Discord Camera Unmirror"

## Usage

Click the extension icon in your Chrome toolbar to open the popup. Use the toggle to switch un-mirroring on or off. Refresh the page for the change to take effect.

## How It Works

Discord applies a CSS class (`mirror__*`) to your video element that sets `transform: scaleX(-1)`, flipping the image horizontally. When enabled, this extension injects a small CSS rule that overrides that transform back to `scaleX(1)`. When disabled, the rule is removed and Discord's default mirroring is restored.

No video data is accessed, processed, or transmitted. The extension only modifies CSS styling on the page.

## Privacy

**This extension does not collect, store, transmit, or share any personal data.**

The only data stored is a single boolean value (on/off) representing your toggle preference. This value is saved locally using Chrome's `storage.sync` API so your setting persists across sessions. No analytics, tracking, telemetry, or network requests of any kind are made by this extension.

Your data is never sold, transferred, or used for any purpose beyond saving your toggle preference.

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.