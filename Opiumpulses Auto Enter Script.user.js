// ==UserScript==
// @name        Opiumpulses Auto Enter Script
// @icon        https://www.opiumpulses.com/favicon.ico
// @author      Acido
// @description Opium Pulses giveaway Auto joiner
// @include     http*://www.opiumpulses.com/giveaways*
// @version     2.0
// @grant       none
// ==/UserScript==

var timehelper = 0
var counter1 = 0
var counter2 = 0
var thelength = $(".giveaways-page-item").length;
console.log("toplam sayi: " + thelength )


setTimeout(function(){
    if(window.location != "https://www.opiumpulses.com/giveaways" ){
    window.location = "https://www.opiumpulses.com/giveaways"
}}, 300);


// var dropdownClassName = "items-settings-per-page-current"
// let element = document.getElementByClass(dropdownClassName);
// element.value = 240;



for (var i=0;i<thelength;i++) {
    if($(".giveaways-page-item")[i].innerHTML.indexOf("ENTERED") == -1) {
        //if($(".giveaways-page-item")[i].innerHTML.indexOf("FREE") != -1) { //original line
        if($(".giveaways-page-item")[i].innerHTML.indexOf("enter") != -1) {
            ++counter2
            //JoinGA($(".giveaways-page-item")[i].querySelector(".giveaways-page-item-img-btn-enter").href);
            //var temp = $(".giveaways-page-item")[i].querySelector(".giveaways-page-item-img-btn-enter").href
            window.location = $(".giveaways-page-item")[i].querySelector(".giveaways-page-item-img-btn-enter").href


            //console.log(temp)
        }
    }
}

console.log("enterable count: " + counter2)

function JoinGA(hreflink) {
    setTimeout(function () {
        $.post(hreflink);
        console.log("Entered giveaway: " + hreflink);
        //console.log("This script is deprecated. It will not be updated anymore.");
    }, Math.floor((timehelper * 450) + 450));
    timehelper++;
}
