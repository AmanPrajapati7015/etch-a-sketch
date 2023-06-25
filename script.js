const container = document.querySelector(".container");
let boxLine;
let box;

for(let j = 1; j <=16; j++){
    boxLine = document.createElement("div");
    boxLine.classList.add("box-line");

    for(let i = 1; i <=16; i++){
        box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseover", (e)=>{
            console.log(e.target);
            e.target.classList.add("colored")
        });
        boxLine.appendChild(box);
    }
    container.appendChild(boxLine);
}


