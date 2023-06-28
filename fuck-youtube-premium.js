// ==UserScript==
// @name         Fuck YouTube Premium
// @namespace    https://github.com/JackieRoxs/
// @version      0.1
// @description  try to take over the world!
// @author       JackieRoxs
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function runScript() {
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
                if (child.id !== "primary-inner") {
                    child.remove();
                    break;
                }
            }
        }, 1000); // Execute the interval function every second (1000 milliseconds)
    }
}

setTimeout(function() {
    runScript(); // Execute the script after 10 seconds (10000 milliseconds) of page loading
}, 1000);

window.onhashchange = function() {
    runScript(); // Execute the script whenever the location changes
};



})();
