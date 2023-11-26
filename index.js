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

/* -------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const items = document.querySelectorAll(".scroll-snap-item");
  let currentIndex = 0; // Keep track of the current snap item

  // Function to scroll to the next or previous item
  function scrollToItem(newIndex) {
    if (newIndex >= 0 && newIndex < items.length) {
      const itemToScrollTo = items[newIndex];
      scrollContainer.scrollTo({
        top: itemToScrollTo.offsetTop - scrollContainer.offsetTop,
        behavior: "smooth",
      });
      currentIndex = newIndex; // Update the current index
    }
  }

  // Event listener for the up button
  document.querySelector(".scroll-up").addEventListener("click", () => {
    scrollToItem(currentIndex - 1); // Scroll to the previous item
  });

  // Event listener for the down button
  document.querySelector(".scroll-down").addEventListener("click", () => {
    scrollToItem(currentIndex + 1); // Scroll to the next item
  });
});

/* -------------------------------------------------------------------- */

function displayViewportWidth(containerSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    // Create a div to display the viewport width or use an existing one
    let widthDisplay = container.querySelector(".viewport-width-display");
    if (!widthDisplay) {
      widthDisplay = document.createElement("div");
      widthDisplay.className = "viewport-width-display"; // Add a class for styling
      container.appendChild(widthDisplay);
    }

    // Update the inner text of the div to the current viewport width
    widthDisplay.textContent = `Viewport: ${window.innerWidth}px`;

    // Style the div
    widthDisplay.style.position = "absolute";
    widthDisplay.style.top = "0";
    widthDisplay.style.right = "0";
    widthDisplay.style.backgroundColor = "var(--dark-pink)";
    widthDisplay.style.color = "white";
    widthDisplay.style.padding = "5px 10px";
    widthDisplay.style.boxShadow = "var(--shadow)";
    widthDisplay.style.textShadow = "var(--shadow)";
    widthDisplay.style.fontSize = "12px";
  });
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  displayViewportWidth(".screen-width-container");
});

// Update width display on window resize
window.addEventListener("resize", () => {
  displayViewportWidth(".screen-width-container");
});

/* -------------------------------------------------------------------- */
