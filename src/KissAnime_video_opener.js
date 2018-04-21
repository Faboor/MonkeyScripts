// ==UserScript==
// @name         KissAnime video opener
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.rapidvideo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.top.location.href = document.getElementById("videojs_html5_api").getAttribute("src");
})();
