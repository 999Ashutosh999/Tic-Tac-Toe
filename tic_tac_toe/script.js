let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector(".new-btn");
let msg=document.querySelector(".msg");
let score = document.querySelector(".score_card");
let score_container = document.querySelector(".score-container");


let turno=true;
let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

var score_o=0;
var score_x=0;


boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
    if(turno){
        box.innerText='O';
        turno=false;
    }
    else{
        box.innerText='X';
        turno=true;
    }
    box.disabled=true;
    checkwinner();
    })
})

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                msg.innerHTML=`Winner is: ${pos1val}`;
                disablebox();
            }
        }
    }
};


const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>{
    turno=true;
    enablebox();
    msg.innerText="";

}

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);