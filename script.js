const container = document.querySelector(".container");
let boxLine;
let box;
let n;

function makeGrid(n){
    container.innerHTML = "";
    for(let j = 1; j <=n; j++){
        boxLine = document.createElement("div");
        boxLine.classList.add("box-line");

        for(let i = 1; i <=n; i++){
            box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", (e)=>{
                console.log(e.target);
                e.target.classList.add("colored");
            });
            boxLine.appendChild(box);
        }

        container.appendChild(boxLine);
    }
}

makeGrid(16);
const changeGrid = document.querySelector(".change-grid");
changeGrid.addEventListener("click", ()=>{
    n = +prompt("Give the size of grid you want.");
    makeGrid(n);

});

