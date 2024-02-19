let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn=document.querySelector("#new");
let msgContainer=document.querySelector(".message");
let msg=document.querySelector("#msg");


let turnO = true;

const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO ) {
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
}

const desableBox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    desableBox();
}


const checkWinner= () =>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner")
                showWinner(pos1);
            }
        }
    };
   
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
