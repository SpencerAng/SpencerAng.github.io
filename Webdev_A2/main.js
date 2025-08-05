//get the "open menu" button (meant for hamIcon)
const hamBtn=document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click",toggleMenus);
//get the menuItem list
const menuItemsList=document.querySelector("header ul");
/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
function toggleMenus(){
//if menuItemsList dont have the class "menuShow", add the class, else remove class
if(menuItemsList.classList.contains("menuShow")){ //change button text to chose menu
menuItemsList.classList.remove("menuShow");
}else{ //if menu NOT showing; //change button text open menu
menuItemsList.classList.add("menuShow");
}
}
const pagehistbtn=document.querySelector("histBut");
const pageholdsbtn=document.querySelector("holdsBut");
const pagestartbtn=document.querySelector("startBut");
const pageknownbtn=document.querySelector("knownBut");
const pagehist=document.querySelector("histPage");
const pageholds=document.querySelector("holdsPage");
const pagestart=document.querySelector("startPage");
const pageknowm=document.querySelector("knownPage");
function hideall(){ //function to hide all pages
histPage.style.display="none";
holdsPage.style.display="none";
startPage.style.display="none";
knownPage.style.display="none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
histBut.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
histPage.style.display="block";
});
holdsBut.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
holdsPage.style.display="block";
});
startBut.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
startPage.style.display="block";
});
knownBut.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
knownPage.style.display="block";
});
hideall(); //call hideall function to hide all pages

const gameHold = document.getElementById("gameHold");
const scoreBox = document.getElementById("scoreBox");
const startGameBut = document.getElementById("startGameBut");
function GetRandom(min,max)
{
return Math.round(Math.random() * (max - min)) + min;
}
function moveGameHold() 
{
gameHold.style.left = GetRandom(0, 60)-30 + "vw";
gameHold.style.top = GetRandom(0, 60)+10 + "vh";
}
var moveGameHoldTime = setInterval(moveGameHold, 1000);
gameHold.addEventListener("click",clickGameHold);
var score=0;
function clickGameHold() {
score++;
scoreBox.innerHTML = "Score: " + score;
}
// startBut.addEventListener("click",startGame);
// function startGame() {
//     score = -1;
//     clickGameHold();
//     gameHold.style.display = "block"
    
//     startGametBut.style.display = "none";

//     setTimeout(function() {
//     clearInterval(moveGameHoldTime);
//     gameHold.removeEventListener("click", clickGameHold);
//     startBut.style.display = "block";
//     gameHold.style.display = "none";
//     }, 30000);
// }