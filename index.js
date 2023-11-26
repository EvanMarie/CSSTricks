function displayContainerWidth(containerSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const width = container.offsetWidth;
    const widthDisplay = document.createElement("div");
    widthDisplay.style.position = "absolute";
    widthDisplay.style.top = "0";
    widthDisplay.style.right = "0";
    widthDisplay.style.backgroundColor = "var(--dark-pink";
    widthDisplay.style.color = "white";
    widthDisplay.style.padding = "5px 10px";
    widthDisplay.style.boxShadow = "var(--shadow)";
    widthDisplay.textContent = `width: ${width}px`;
    widthDisplay.style.textShadow = "var(--shadow)";

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
