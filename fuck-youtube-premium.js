// ==UserScript==
// @name         Fuck YouTube Premium
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function runScript() {
        setTimeout(function() {
        var secondaryElement = document.getElementById("secondary");
    var primary = document.getElementById("primary");
    if (secondaryElement) {
        var intervalId = setInterval(function() {
            var children = secondaryElement.children;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child.id !== "secondary-inner") {
                    child.remove();
                    break;
                }
            }
        }, 1000); // Execute the interval function every second (1000 milliseconds)
    }
    if (primary) {
        var intervalId2 = setInterval(function() {
            var children = primary.children;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child.id !== "primary-inner" && child.id !== "header" && child.id !== "big-yoodle" && child.id !== "title-container" && child.id !== "spinner-container" && child.id !== "contents") {
                    child.remove();
                    break;
                }

            }
        }, 1000); // Execute the interval function every second (1000 milliseconds)
    }
            }, 3000);
    }

setTimeout(function() {
    if (window.location.href.includes("watch?v=")) {
        runScript();
    }
}, 1000);

var localurl = location.href;

    function refreshlink() {
        if (location.href !== localurl) {
            console.log('URL has changed');
            if (window.location.href.includes("watch?v=")) {
                runScript();
            }
            // Perform actions or execute functions when the URL changes
            // Add your custom code here
        }
        localurl = location.href;
    }

    setInterval(refreshlink, 500);
})();
