const container = document.querySelector("#container");
const button    = document.querySelector("button");
const gridItems = document.querySelectorAll(".gridItem")


function createGrid (divsPerSide) {
    for (let i = 0; i < divsPerSide * divsPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItem");
    container.appendChild(div);
}
}

// I need to add functionality to add divs per side.
button.addEventListener("click", () => {
    const numberOfDivs = prompt("How many divs per side: ");
    createGrid(numberOfDivs);
});

gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
        gridItem.setAttribute("style", "background: red;")
    })
})
