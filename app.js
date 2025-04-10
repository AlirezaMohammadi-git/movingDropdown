const buttons = document.querySelectorAll("ol > li");
const background = document.querySelector(".background");

function showContent() {
  const content = this.querySelector(".content");

  content.classList.add("enable");
  const coords = content.getBoundingClientRect();

  Object.assign(background.style, {
    width: `${coords.width}px`,
    height: `${coords.height}px`,
    top: `${coords.top}px`,
    left: `${coords.left}px`,
  });

  background.classList.add("open");

  // setting up click events
  const wide = this.querySelector(".wide");
  wide.addEventListener("click", print);

  setTimeout(() => {
    if (content.classList.contains("enable")) {
      content.classList.add("active");
    }
  }, 150);
}

function print() {
  console.log("this is wide class");
}

function hideContents(e) {
  const content = this.querySelector(".content");
  // Check if mouse is moving to .content by defining second target!
  const isLeavingToContent = e.relatedTarget?.closest(".content");
  if (isLeavingToContent) return; // Don't hide if hovering content
  content.classList.remove("enable", "active");
  background.classList.remove("open");
  // removing listeners
  this.querySelector(".wide").removeEventListener("click", print);
}

buttons.forEach((button) => {
  button.addEventListener("mouseenter", showContent);
  button.addEventListener("mouseleave", hideContents);
});
