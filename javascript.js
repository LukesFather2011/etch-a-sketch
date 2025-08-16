const container = document.querySelector("#container");

// create 16 divs inside the container for further styling
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItem");
    container.appendChild(div);
}

const gridItems = document.querySelectorAll(".gridItem")

gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
        gridItem.setAttribute("style", "background: red;")
    })
})
