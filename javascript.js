const container = document.querySelector("#container");
const divContainer = document.querySelector("#divContainer");
const button    = document.querySelector("button");
const gridItems = document.querySelectorAll(".gridItem");


function createGrid (divsPerSide) {
    divContainer.innerHTML = "";  // clears the grid 
    for (let i = 0; i < divsPerSide * divsPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItem");
    div.style.width = `${100 / divsPerSide}%`;
    div.style.height = `${100 / divsPerSide}%`;
    divContainer.appendChild(div);

    // adds hover effect to the divs
    div.addEventListener("mouseover", () => {
    div.style.background = "red";
});
    }
}

// I need to add functionality to add divs per side.
button.addEventListener("click", () => {
    const numberOfDivs = prompt("How many divs per side: ");
    createGrid(numberOfDivs);
});


