// ==UserScript==
// @name         KissAnimeCompanion
// @namespace    https://github.com/Faboor/MonkeyScripts
// @version      1.1
// @description  More pleasurable watching experience on KissAnime with AdBlock on
// @author       Peter Kovary <peter.kovary@hotmail.com>
// @match        http://kissanime.ru/Anime/*/Episode-*?id=*&s=default
// @match        https://*.playercdn.net/*.mp4
// @match        http://kissanime.ru/Special/AreYouHuman2*
// @match        http://kissanime.ru/Anime/*
// @match        https://*.rapidvideo.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    let defaultServerPageRE = /^https?:\/\/(www\.)?kissanime\.ru\/Anime\/[^/]+\/Episode-\d{3}\?id=\d+&s=default$/;
    let videoCdnPageRE = /^https?:\/\/[^/]*playercdn\.net\/.+\.mp4$/;
    let captchaRetryPageRE = /^https?:\/\/(www.)?kissanime.ru\/Special\/AreYouHuman2\/?$/;
    let episodeListPageRE = /^https?:\/\/(www.)?kissanime.ru\/Anime\/[^/]+\/?$/;
    let captchaPageRE = /^https?:\/\/(www.)?kissanime.ru\/Special\/AreYouHuman2\?reUrl=.*$/;
    let rapidVideoPageRE = /^https?:\/\/(www.)?rapidvideo.com\/.+$/;

    if (captchaRetryPageRE.test(window.location.href)) {
        document.firstElementChild.lastElementChild.firstElementChild.click();

    } else if (captchaPageRE.test(window.location.href)) {
        document.getElementById('answerCap').value = "0,1";
        document.getElementById('formVerify').submit();

    } else if (defaultServerPageRE.test(window.location.href)) {
        GM_setValue("KA_Ep_Url", window.location.href);
        let epSelect = document.getElementById("selectEpisode");
        let epNumber = epSelect.selectedOptions[0].label.replace("Episode ", "");
        let animeName = document.getElementById("navsubbar").firstElementChild.firstElementChild.innerText.replace("Anime ", "").replace(" information", "");
        GM_setValue("KA_Ep_Title", epNumber + " " + animeName);

        let episodeSelector = document.getElementsByClassName('barContent')[0].firstElementChild.firstElementChild;
        GM_setValue("KA_Ep_Selector", episodeSelector.outerHTML);

        let options = document.getElementsByTagName("option");
        let rapidVideoOption;
        for (let i = 0; i < options.length; i++) {
            if (options[i].innerText === "RapidVideo") {
                rapidVideoOption = options[i];
                break;
            }
        }

        if (rapidVideoOption != undefined) {
            let selectElem = rapidVideoOption.parentElement;
            if (selectElem.selectedIndex !== rapidVideoOption.index) {
                selectElem.selectedIndex = rapidVideoOption.index;
                selectElem.onchange();
            }
        }

    } else if (videoCdnPageRE.test(window.location.href)) {
        let title = GM_getValue("KA_Ep_Title");
        if (title) {
            document.head.insertAdjacentHTML("beforeend", "<title>" + title + "</title>");
        }
        document.head.insertAdjacentHTML("beforeend",`
<style>
html, body {
  font: normal 12px "Tahoma" , Arial, Helvetica, sans-serif;
  line-height: 18px;
  color: #dadada;
  background-color:#161616;
  height: 100%;
}

select {
  background-color: #393939;
  color: #ccc;
  border: 1px solid #666666;
  font: normal 15px "Tahoma" , Arial, Helvetica, sans-serif;
}

.lbl {
  width: 150px;
  padding: 2px 15px;
  text-align: right;
  font: normal 14px "Tahoma" , Arial, Helvetica, sans-serif;
}
</style>`);
        let episodeSelector = GM_getValue("KA_Ep_Selector");
        if (episodeSelector) {
            document.body.insertAdjacentHTML("afterbegin", episodeSelector);
            let selectElem = document.getElementById("selectEpisode");
            let url = GM_getValue("KA_Ep_Url");
            url = url.substr(0, url.lastIndexOf('/') + 1);
            selectElem.onchange = function(e) {
                window.location.href = url + selectElem.selectedOptions[0].value;
            };
        }
        let videoElement = document.getElementsByTagName('video')[0];
        document.onkeypress = function (e) {
            if (e.key === "f") {
                if (videoElement.webkitDisplayingFullscreen) {
                    videoElement.webkitExitFullscreen();
                } else {
                    videoElement.webkitRequestFullscreen();
                }
            } else if (e.key === "s") {
                videoElement.currentTime += 85;
            } else if (e.key === "a") {
                videoElement.currentTime -= 10;
            } else if (e.key === "n") {
                let btnNext = document.getElementById("btnNext");
                if (btnNext) {
                    btnNext.click();
                }
            } else if (e.key === "p") {
                let btnPrev = document.getElementById("btnPrevious");
                if (btnPrev) {
                    btnPrev.click();
                }
            }
        };
        videoElement.setAttribute("style", "margin-top:50px");

    } else if (episodeListPageRE.test(window.location.href)) {
        let table = document.getElementsByClassName('listing')[0];
        let links = table.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].setAttribute("target", "_blank");
        }

    } else if (rapidVideoPageRE.test(window.location.href)) {
        window.top.location.href = document.getElementById("videojs_html5_api").getAttribute("src");

    } else {
        console.log("No matches");
    }
})();
