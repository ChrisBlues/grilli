'use strict';


/**
 * * PRELOAD
 * 
 * loading will be and after document is loaded
 * le chargement aura lieu et après le chargement du document
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});