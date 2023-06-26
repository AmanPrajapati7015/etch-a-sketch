const container = document.querySelector(".container");
let boxLine;
let box;
let n = 16;
let selectedColor ="rgb(0, 0, 0);";

randomNo = function(){
    return Math.floor(Math.random()*256);
}

function randomizeColor(){
    let r = randomNo();
    let g = randomNo();
    let b = randomNo();
    // selectedColor = `rgb(${r}, ${g}, ${b})`
    let rgbArray = [r, g, b];
    return rgbArray
}






function makeDarker(){
    // get attributes (rgb)
    // subtract from current color
    // set new color to element
}





function makeGrid(n){
    container.innerHTML = "";
    for(let j = 1; j <=n; j++){
        boxLine = document.createElement("div");
        boxLine.classList.add("box-line");
        for(let i = 1; i <=n; i++){
            box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundColor = "rgb(255, 255, 255)"
            box.setAttribute("data-r", 26);
            box.setAttribute("data-g", 26);
            box.setAttribute("data-b", 26);

            box.addEventListener("mouseover", (e)=>{
                if (selectedColor === "rainbow"){
                    let arr = randomizeColor();
                    e.target.style = `background-color : rgb(${arr[0]}, ${arr[1]}, ${arr[2]});`;//add r g b values in place of selectedColor
                    e.target.setAttribute("data-r", arr[0]/10);
                    e.target.setAttribute("data-g", arr[1]/10);
                    e.target.setAttribute("data-b", arr[2]/10);
                }
                else if (selectedColor === "darken"){
                    console.log("to subtract")
                    console.log(e.target.getAttribute('data-r'))
                    console.log(e.target.getAttribute('data-g'))
                    console.log(e.target.getAttribute('data-b'))
                    console.log("form what!")
                    console.log(e.target.style.backgroundColor)
                    //split every r g b from upper string and convert into numbers
                    //set backgroundColor = r-(data-r), ....
                }
                else {
                    e.target.style = `background-color : ${selectedColor}`;
                }
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
erasor.addEventListener("click", () => {selectedColor = "rgb(255, 255, 255)"});

const black = document.querySelector(".black");
black.addEventListener("click", () => {selectedColor = "rgb(0, 0, 0)"});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {selectedColor = "rainbow"});

const darken = document.querySelector(".darken");
darken.addEventListener("click", () => {selectedColor = "darken"});



