// ==UserScript==
// @name         Fulscreen Playercdn Video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  After RapidVideo redirect to video only, fulscreen it!
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        https://*.playercdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // TODO: Has to be initiated by user action
    // Assigned: @little_b
    let video = document.getElementsByTagName('video')[0]
    document.onkeypress = ({key}) => {
        switch (key) {
            case "f":
                video.requestFullscreen();
                break;
            case "m":
                video.muted = !video.muted;
                break;
            case "s":
                video.currentTime += 80;
                break;
            case "h":
                video.currentTime -= 10;
                break;
            case "l":
                video.currentTime += 10;
                break;
            case "j":
                video.volume = Math.max(video.volume - 0.1, 0);
                break;
            case "k":
                video.volume = Math.min(video.volume + 0.1, 1);
                break;
            default:
                console.log(`Registered keypress "${key}"`);
        }
    }
})();