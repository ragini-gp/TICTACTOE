console.log("Welcome to TicTactoe");
let enter = new Audio('enter.mp3');

//background music
let bgm = new Audio('game.mp3');
let out = new Audio('out.mp3');

let turn ="x";
let c=0;

//Function to change the turn
// function changeturn()
// {
//     if(turn=="x")
//     turn="o";
//     else
//     turn ="x";
//     return turn;
// }
let boxt = document.getElementsByClassName('boxt');
let win=[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,15,90],
    [0,4,8,0,15,45],
    [2,4,6,0,15,135],
]

let imag = document.getElementById('idd');
// console.log(img);
//Function to check win
function chec()
{
    win.forEach(function f(ele){
        if((boxt[ele[0]].innerText==boxt[ele[1]].innerText)&&(boxt[ele[2]].innerText==boxt[ele[1]].innerText)&&(boxt[ele[0]].innerText!=""))
        {
            infore[0].innerText = boxt[ele[0]].innerText+" won ";
            imag.style.visibility='visible';
            document.querySelector(".line").style.transform = `translate(${ele[3]}vw, ${ele[4]}vw) rotate(${ele[5]}deg)`;
            document.querySelector(".line").style.width="30vw";
        }
    })
}

//Game logic
// bgm.play();
let boxes = document.getElementsByClassName('box');
let infore = document.getElementsByClassName('info1');
console.log(infore);
Array.from(boxes).forEach(function f(element){
    let bt = element.querySelector('.boxt');
    bt.addEventListener('click',function e(){   
        if(bt.innerText=="")
        {
            bt.innerText=turn;
            if(turn=="x")
            turn="o";
            else
            turn="x";
            enter.play();
            infore[0].innerText = `turn for ${turn}`;
            chec();
        }
    })
})

function clea()
{
    Array.from(boxes).forEach(function a(element){
       let e1 = element.querySelector('.boxt');
       e1.innerText="";
       imag.style.visibility='hidden';
       turn="x";
       infore[0].innerText = `turn for ${turn}`;
       document.querySelector(".line").style.width="0vw";
    })
}