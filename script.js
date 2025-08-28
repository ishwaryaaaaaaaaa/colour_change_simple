// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change color on key press (Enter) or screen tap
function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// For desktop (Enter key)
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    changeColor();
  }
});

// For mobile (tap anywhere)
document.addEventListener("click", changeColor);
