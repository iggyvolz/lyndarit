// ==UserScript==
// @name        RIT Lynda Login
// @namespace   https://www.lynda.com
// @author      Ryan Volz <rjv8806@g.rit.edu>
// @description Automatically logs into lynda.com for RIT students
// @include     https://www.lynda.com/*
// @include     https://lynda.com/*
// @grant		none
// @version     1.0.0
// ==/UserScript==

window.onload=function() { if(document.getElementsByTagName("html")[0].innerHTML.indexOf("Start your free trial now")!==-1) { document.location=document.location.href+"?org=rit.edu"; } };
