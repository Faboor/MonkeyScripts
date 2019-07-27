// ==UserScript==
// @name         KissAnime Flow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        https://kissanime.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.pathname.startsWith('/Special/AreYouHuman')) {
        document.getElementsByClassName('specialButton')[0].click()
    } else if (location.pathname.startsWith('/Anime/')) {
        window.open(document.getElementById('my_video_1').src, '_blank');
    }
})();