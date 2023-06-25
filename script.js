const container = document.querySelector(".container");
let boxLine;
let box;
let n = 16;
let selectedColor ="black";

randomNo = function(){
    return Math.floor(Math.random()*256);
}

function randomizeColor(){
    let r = randomNo();
    let g = randomNo();
    let b = randomNo();
    selectedColor = `rgb(${r}, ${g}, ${b})`
}


function makeGrid(n){
    container.innerHTML = "";
    for(let j = 1; j <=n; j++){
        boxLine = document.createElement("div");
        boxLine.classList.add("box-line");
        for(let i = 1; i <=n; i++){
            box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", (e)=>{
                if (selectedColor === "rainbow"){
                    randomizeColor();
                    e.target.style = `background-color :${selectedColor};`
                    selectedColor = "rainbow"
                }
                else e.target.style = `background-color :${selectedColor};`
            });
            boxLine.appendChild(box);
        }
        container.appendChild(boxLine);
    }
}

makeGrid(n);

const changeGrid = document.querySelector(".change-grid");
changeGrid.addEventListener("click", ()=>{
    n = +prompt("Give the size of grid you want.");
    makeGrid(n);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{makeGrid(n)});

const erasor = document.querySelector(".erasor");
erasor.addEventListener("click", () => {selectedColor = "white"});

const black = document.querySelector(".black");
black.addEventListener("click", () => {selectedColor = "black"});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {selectedColor = "rainbow"});




