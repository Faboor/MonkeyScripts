// ==UserScript==
// @name         Search . to go to homepage
// @namespace    https://github.com/Faboor/MonkeyScripts
// @version      0.1
// @description  When using Chrome search enigine "keyword" shortcuts, searches for "." should redirect to homepage. You have to have `=%s&<SENTINEL>` in your search url
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @include      https://*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  let SENTINEL = "=.&if-dot-go-home";

  let query = window.location.search;
  if (query.includes(SENTINEL)) {
    window.location = 'https://' + window.location.hostname;
  }
})();
