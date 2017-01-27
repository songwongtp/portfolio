$('*').click(function(){
    $('#collapsable-nav').collapse('hide');
});

(function (global) {

var choose = {};

var homeHtml = "snippets/home-snippet.html";
var meHtml = "snippets/aboutMe-snippet.html";
var resumeHtml = "snippets/resume-snippet.html";
var contactHtml = "snippets/contact-snippet.html";

// Convenience function for inserting innerHTML for 'select'.
var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};

// Show loading icon inside slement identified by 'selector'.
var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#mainText");
$ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
        document.querySelector("#mainText")
            .innerHTML = responseText;
    },
    false);
});

choose.loadAboutMe = function() {
    showLoading("#mainText");
    $ajaxUtils.sendGetRequest(
        meHtml,
        function (responseText) {
            document.querySelector("#mainText")
                .innerHTML = responseText;
        },
        false);
};

choose.loadResume = function() {
    showLoading("#mainText");
    $ajaxUtils.sendGetRequest(
        resumeHtml,
        function (responseText) {
            document.querySelector("#mainText")
                .innerHTML = responseText;
        },
        false);
};

choose.loadContact = function() {
    showLoading("#mainText");
    $ajaxUtils.sendGetRequest(
        contactHtml,
        function (responseText) {
            document.querySelector("#mainText")
                .innerHTML = responseText;
        },
        false);
};

global.$choose = choose;
})(window);
