"use strict";

window.addEventListener("DOMContentLoaded",
function(){
   
$("header").textillate({
    loop: false, 
    minDisplayTime: 2000, 
    initialDelay: 2000, 
    autoStart: true, 
    in: { 
    effect: "fadeInLeftBig",
    delayScale: 1.5, 
    delay: 50, 
    sync: false, 
    shuffle: true 
    }
    });
    
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    this.setTimeout(
        function(){
            let popMessage = "いらっしゃい!おみくじ引いてって!";
    window.alert(popMessage);
        },
        "5000"
    );
}, false

);


const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
       //let n = Math.floor(Math.random() * 3);

        // switch (n) {
        //     case 0:
        //     btn1.textContent = "Very Happy!!";
        //     btn1.style.color = "#fff001";
        //     btn1.style.fontSize = "40px";
        //     break;
        //     case 1:
        //     btn1.textContent = "Happy!!";
        //     btn1.style.color = "#fff001";
        //     btn1.style.fontSize = "40px";
        //     break;
        //     case 2:
        //     btn1.textContent = "UnHappy...";
        //     btn1.style.color = "#fff001";
        //     btn1.style.fontSize = "40px";
        //     break;
        //     case 3:
        //     btn1.textContent = "UnHappy...";
        //     btn1.style.color = "#fff001";
        //     btn1.style.fontSize = "40px";
        //     break;
            
        // }
btn1.style.transition = "1s"; 
        let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
        let resultColor = ["#fff001","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["55px","50px","45px","40px","35px","40px"];
        let resultMaxSpeed = [10,10,8,5,5,5]; 
        let resultMaxSize = [30,30,20,15,20,20]; 
        let resultImage = [ 
            "img/star.png", 
            "img/sakura_hanabira.png", 
            "img/sakura_hanabira.png", 
            "img/sakura_hanabira.png", 
            "img/leaf.png", 
            "img/snowflakes.png"
        ];
        let n = Math.floor(Math.random() * resultText.length);
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor[n];
        btn1.style.fontSize =resultFontSize[n];


       
$(document).snowfall("clear");

$(document).ready(function(){
$(document).snowfall({
maxSpeed : resultMaxSpeed[n], 
maxSize : resultMaxSize[n], 
image : resultImage[n]
});
});
    }, false
);