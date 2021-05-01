// ==UserScript==
// @name         Bing Redirect
// @namespace    https://github.com/Faboor/MonkeyScripts
// @version      0.1
// @description  Redirect bing.com/search to google.com/search
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        https://www.bing.com/search?q=*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    document.location = "https://google.com/search" + document.location.search;
})();
