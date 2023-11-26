function displayContainerWidth(containerSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const width = container.offsetWidth;
    const widthDisplay = document.createElement("div");
    widthDisplay.style.position = "absolute";
    widthDisplay.style.top = "0";
    widthDisplay.style.right = "0";
    widthDisplay.style.backgroundColor = "rgba(0,0,0,0.7)";
    widthDisplay.style.color = "white";
    widthDisplay.style.padding = "5px 10px";
    widthDisplay.textContent = `width: ${width}px`;

    container.style.position = "relative";
    container.appendChild(widthDisplay);
  });
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  displayContainerWidth(".responsive-container");
});

// Optional: Update width on window resize
window.addEventListener("resize", () => {
  displayContainerWidth(".responsive-container");
});
