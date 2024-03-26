const DEFAULT_SIZE = 16;
const SCREEN_WIDTH = 800;

function buildGrid(container, size){
    for(let i = 0;i < size*size;i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        
        grid.setAttribute("style", "border: 1px solid;");
        grid.style.width =  `${(SCREEN_WIDTH / size)-2}px`;
        grid.style.height = `${(SCREEN_WIDTH / size)-2}px`;
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "lightgray";
        });
        // grid.addEventListener("mouseout", () => {
        //     grid.style.backgroundColor = "";
        // });
    }    
}

let container = document.querySelector(".container");

buildGrid(container, DEFAULT_SIZE);

let button = document.querySelector(".resize");

button.addEventListener("click", () => {
    let newSize = prompt("Input the number of grid in each side! (Range: 1~100)");
    if(newSize > 100 || newSize < 1){
        alert("Invalid input!");
    }

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    buildGrid(container, newSize);

});