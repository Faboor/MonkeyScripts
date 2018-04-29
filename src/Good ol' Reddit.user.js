// ==UserScript==
// @name         Good ol' Reddit
// @namespace    https://github.com/Faboor/MonkeyScripts
// @version      1.0
// @description  Bring the old reddit back
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (!document.location.hostname.startsWith("old"))
        document.location.replace(document.location.href.replace(/(https?:\/\/)(www.)?/, "$1old."));
})();
