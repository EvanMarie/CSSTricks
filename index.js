// JavaScript file for Simple Project
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

function createSectionStack(title, content) {
  // Create the section element
  const section = document.createElement("section");
  section.className = "section-stack";

  // Create the title element
  const heading = document.createElement("h2");
  heading.className = "section-heading";
  heading.textContent = title;

  // Create the content element
  const contentDiv = document.createElement("div");
  contentDiv.className = "section-content";
  contentDiv.innerHTML = content;

  // Append the title and content to the section
  section.appendChild(heading);
  section.appendChild(contentDiv);

  // Finally, append the section to the main content area of the page
  document.querySelector(".main").appendChild(section);
}
