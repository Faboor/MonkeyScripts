# MonkeyScripts
Collection of random Tampermonkey scripts made for myself. Feel free to use/improve them.


## KissAnimeCompanion
Improves the user watching experience on [KissAnime.ru](http://kissanime.ru), which is usually made really unpleasant by their use of captchas before watching every episode, trying to open pop-up ads when you click anywhere and interrupting your watching after a few seconds when you use AdBlock.
### Features
- Works with AdBlock enabled
- Links from the episode list open in new tab
- Automatically brute-force captcha image challenge
- Open video directly from CDN server, not in the custom player
- Keep episode selector and previous / next buttons
- Keyboard shortcuts on video page:
  - **F** - toggle fullscreen
  - **S** - forward 85 seconds (skip op)
  - **A** - rewind 10 seconds
  - **N** - play next episode
  - **P** - play previous episode

*Note: currently only supports RapidVideo, but will automatically use it if available*


## Good ol' Reddit
Redirects [reddit.com](https://reddit.com "New Reddit") urls to [old.reddit.com](https://old.reddit.com "Old Reddit"). I personally think, that the new page is not as easy to navigate and uses to many modal windows. Not sure how long will Reddit support the old page, but I intend to stick with it as long as possible.


## Redirect www.amazon to smile.amazon
Does what it says: Redirects amazon pages to smile.amazon, so that a small percentage of the purchases go towards charity.


## Bing Redirect
Redirects searches on Bing to Google. Particularly useful when the search starts from the Windows Start menu where you cannot choose your default search engine. Work great in conjunction with [EdgeDeflector](https://github.com/da2x/EdgeDeflector) to open those Start searches in Chrome instead of Edge ([instructions](https://www.howtogeek.com/226638/make-the-windows-10-start-menu-and-cortana-search-google-instead-of-bing/)).


## Search . to go to homepage
Using Chrome's search engine keyword shortcuts is great. I got used to typing `yt <space> something to search` to search YouTube. But sometimes I want to just go to the YouTube home and automatically type `yt <space>` and it get's me nowhere. This script will check if the search is for just a single `.` character and redirect to the main page. But you have to add a sentinel string to the search url in [chrome://settings/searchEngines](chrome://settings/searchEngines).
