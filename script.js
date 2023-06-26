const container = document.querySelector(".container");
const gridSizeDisplay = document.querySelector("#grid-size-display");
let boxLine;
let box;
let n = 16;
let selectedColor ="rgb(0, 0, 0);";

randomNo = function(){
    return Math.floor(Math.random()*256);
}

//generate array of 3 random integers in range [1, 255]
function randomizeColor(){
    let r = randomNo();
    let g = randomNo();
    let b = randomNo();
    let rgbArray = [r, g, b];
    return rgbArray
}

function onHover(e){
    if (selectedColor === "rainbow"){
        let arr = randomizeColor();
        //add r g b values in place of selectedColor
        e.target.style = `background-color : rgb(${arr[0]}, ${arr[1]}, ${arr[2]});`;
        e.target.setAttribute("data-r", arr[0]/10);
        e.target.setAttribute("data-g", arr[1]/10);
        e.target.setAttribute("data-b", arr[2]/10);
    }
    else if (selectedColor === "darken"){
        //gets factor of each component (r g b)
        let factor = [e.target.getAttribute('data-r'),e.target.getAttribute('data-g'),e.target.getAttribute('data-b')]

        //gets value of current color
        let valuesString = e.target.style.backgroundColor
        let oldColors =  valuesString.slice(4, -1).split(", ")
        console.log(oldColors)

        //updates the current color
        let newColors =`rgb(${(+oldColors[0])-(+factor[0])}, ${(+oldColors[1])-(+factor[1])}, ${(+oldColors[2])-(+factor[2])})`;
        e.target.style.backgroundColor = newColors;
    }
    else {
        e.target.style = `background-color : ${selectedColor}`;
    }
}




function makeGrid(n){
    container.innerHTML = "";
    for(let j = 1; j <=n; j++){
        boxLine = document.createElement("div");
        boxLine.classList.add("box-line");
        for(let i = 1; i <=n; i++){
            box = document.createElement("div");
            box.classList.add("box");

            //ensure every box have following attributes/style
            box.style.backgroundColor = "rgb(255, 255, 255)"
            box.setAttribute("data-r", 25.5);
            box.setAttribute("data-g", 25.5);
            box.setAttribute("data-b", 25.5);

            box.addEventListener("mouseover", onHover);
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
    gridSizeDisplay.textContent = `Grid size : ${n} X ${n}`;
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

const gridLine = document.querySelector(".grid-line");
gridLine.addEventListener("click", (e) => {
    // changes the borderWidth varible in css 
    let toggleBorder = document.querySelector(':root');
    if (getComputedStyle(toggleBorder).getPropertyValue('--borderWidth') == "0px"){
        toggleBorder.style.setProperty('--borderWidth', '1px'); 
    }
    else{
        toggleBorder.style.setProperty('--borderWidth', '0px');
    }
    //toggle button while clicked
    e.target.classList.toggle("clicked");


});



// toggle grid lines .clicked add
// change grid => change text above it 