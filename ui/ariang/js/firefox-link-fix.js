"use strict";

(function () {
    if (typeof angular === "undefined" || !/Firefox/.test(navigator.userAgent)) {
        return;
    }

    angular.module("ariaNg").config(["$compileProvider", function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|moz-extension):/);
    }]);
}());
