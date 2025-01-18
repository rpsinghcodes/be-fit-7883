// script.js

const video = document.querySelector("#preview");
const breakdownSection = document.querySelector("#calorie-breakdown");
const breakdownContainer = document.querySelector("#breakdown");
const totalCaloriesElement = document.querySelector("#total-calories");
const errorMessage = document.querySelector("#error-message");

let dishData = null;

// Mock backend calorie data
const calorieData = {
  "Idli": 100,
  "Vada": 200,
  "Sambhar": 120,
  "Chutney": 80,
};

// Initialize QR Scanner
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => {
    errorMessage.textContent = "Unable to access camera.";
  });

// Simulate QR Code Reading (Replace this with a QR library for production)
video.addEventListener("click", () => {
  // Simulated QR code data
  const qrData = JSON.stringify({
    dishName: "Idli Vada Combo",
    items: [
      { name: "Idli", quantity: 2 },
      { name: "Vada", quantity: 1 },
      { name: "Sambhar", quantity: 1 },
      { name: "Chutney", quantity: 1 },
    ],
  });

  processQRCode(qrData);
});

// Process QR Code
function processQRCode(data) {
  try {
    dishData = JSON.parse(data);
    displayBreakdown(dishData);
  } catch (err) {
    errorMessage.textContent = "Invalid QR Code.";
  }
}

// Display Calorie Breakdown
function displayBreakdown(dishData) {
  errorMessage.textContent = ""; // Clear errors
  breakdownSection.classList.remove("hidden");
  breakdownContainer.innerHTML = "";

  let totalCalories = 0;

  dishData.items.forEach((item) => {
    const caloriePerUnit = calorieData[item.name] || 0;
    const itemCalories = caloriePerUnit * item.quantity;
    totalCalories += itemCalories;

    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <span>${item.name} (${item.quantity}):</span>
      <button onclick="updateQuantity('${item.name}', -1)">-</button>
      <span>${item.quantity}</span>
      <button onclick="updateQuantity('${item.name}', 1)">+</button>
      <span>${itemCalories} cal</span>
    `;

    breakdownContainer.appendChild(itemElement);
  });

  totalCaloriesElement.textContent = totalCalories;
}

// Update Quantity
function updateQuantity(itemName, change) {
  const item = dishData.items.find((i) => i.name === itemName);
  if (!item) return;

  item.quantity = Math.max(0, item.quantity + change);
  displayBreakdown(dishData);
}
