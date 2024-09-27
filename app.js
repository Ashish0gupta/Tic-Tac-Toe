let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//PlayerX, PLayerO
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO)
        {
            box.innerText="O";
            box.style.color="blue";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const newGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes)
        box.disabled=true;
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pat1=boxes[pattern[0]].innerText;
        let pat2=boxes[pattern[1]].innerText;
        let pat3=boxes[pattern[2]].innerText;
        if(pat1!="" && pat2!="" && pat3!="")
        {
            if(pat1==pat2 && pat2==pat3)
            {
                console.log("Winner ",pat1);
                showWinner(pat1);
            }
        }
    }
}
newGameBtn.addEventListener("click",newGame);
reset.addEventListener("click",newGame);