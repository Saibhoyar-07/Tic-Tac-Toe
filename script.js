let boxes=document.querySelectorAll(".boxes");
let turn1=document.querySelector(".turn1");
let turn2=document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");
let reset=document.getElementById("reset");
let game=document.getElementById("new");
let clicksound= new Audio("click.mp3")
let winningsound= new Audio("winning.mp3");
let resetsound= new Audio("reset.mp3")
let newsound= new Audio("new.mp3")

let turnX=true;
let winnerCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
reset.addEventListener('click',()=>{
    resetsound.play();

    boxes.forEach(box=>{
        box.innerHTML="";
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("bs");
    })  
})
game.addEventListener('click',()=>{
    newsound.play();

    boxes.forEach(box=>{
        box.innerHTML="";
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("bs");
    })  
})

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        clicksound.play();
       if(turnX){
        box.innerHTML="X";
        box.style.color="rgb(174,51,96)"
        turn2.classList.add("bs")
        turn1.classList.remove("bs");
        turnX=false;
       }
       else{
        box.innerHTML="o";
         box.style.color="rgb(17,52,182)"
         turn1.classList.add("bs");
         turn2.classList.remove("bs");
        turnX=true;
       }
       checkWinner();
    })
})
function showResult(result){
    boxes.forEach(box=>{
        box.disabled=true;
        box.classList.remove("hover");
    })
    msg.classList.remove("hide");
    span.innerHTML=result;
    if(result==="X"){
        span.style.color="rgb(174,51,96)"
    }
    else{
        span.style.color="rgb(17,52,182)"

    }

}
function checkWinner(){
    for(let counter of winnerCondition){
        let box1=boxes[counter[0]].innerHTML;
        let box2=boxes[counter[1]].innerHTML;
        let box3=boxes[counter[2]].innerHTML;
        if(box1!=="" && box2!=="" && box3!==""){
            if(box1===box2 && box2===box3){
                showResult(box1);
                winningsound.play();
                boxes.forEach(box=>{
                    box.classList.add("bs");

                })  
                boxes[counter[0]].classList.remove("bs");
                boxes[counter[1]].classList.remove("bs");
                boxes[counter[2]].classList.remove("bs");
            }
        }

    }
}