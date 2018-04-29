# MonkeyScripts
Collection of Tampermonkey scripts I use or wrote


## KissAnimeCompanion
Improves the user watching experience on [KissAnime.ru](http://kissanime.ru), which is usually made really unplesant by their use of captchas before watching every episode, trying to open pop-up ads when you click anywhere and interrupting your watching after a few seconds when you use AdBlock.
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
