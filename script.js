// --- Demonstrating scope ---
let globalCount = 0; // global variable

// Function with parameters + return value
function calculateArea(width, height) {
  let area = width * height; // local variable
  return area;
}

// Function to toggle animation class
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Function to open modal
function openModal(modal) {
  modal.style.display = "flex";
}

// Function to close modal
function closeModal(modal) {
  modal.style.display = "none";
}

// DOM elements
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");
const flipCard = document.getElementById("flipCard");
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Event listeners
animateBtn.addEventListener("click", () => {
  toggleAnimation(box, "animate");

  globalCount++;
  console.log("Box animated " + globalCount + " times");

  // Example use of return value
  console.log("Box area: " + calculateArea(100, 100));
});

flipCard.addEventListener("click", () => {
  toggleAnimation(flipCard, "flipped");
});

openModalBtn.addEventListener("click", () => {
  openModal(modal);
});

closeModalBtn.addEventListener("click", () => {
  closeModal(modal);
});
