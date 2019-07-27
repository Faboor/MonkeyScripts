// ==UserScript==
// @name         RapidVideo skip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        https://www.rapidvideo.com/*
// @match        https://www.rapidvid.to/e/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    location.href = document.getElementById('videojs').firstElementChild.src
})();