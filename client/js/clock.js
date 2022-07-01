var hourHand=document.querySelector("#hour-hand");
var secondHand=document.querySelector("#second-hand");
var minHand=document.querySelector("#min-hand");
 
function clock(){
    var date = new Date();
    var sec=date.getSeconds();
    var hr=date.getHours();
    var min=date.getMinutes();
    console.log(min);
     secondHand.style.transform="rotateZ("+eval(sec*6-90)+"deg)";
     minHand.style.transform="rotateZ("+eval(min*6-90)+"deg)";
     hourHand.style.transform="rotateZ("+eval(hr*30+min*0.5-90)+"deg)";
    //hourHand.style.transform="rotateZ("+eval(sec*6-90)+"deg)";
     
 }
setInterval(clock,1000);