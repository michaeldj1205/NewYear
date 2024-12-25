function updateCountdown() {
  const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`);
  const now = new Date();
  const diff = newYear - now;

  if (diff <= 0) {
    // Stop countdown updates
    document.getElementById("countdown").style.display = "none"; // Hide countdown
    showCelebrationMessage();
    startFireworks();
    playCelebrationSong();
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function startFireworks() {
  const duration = 5000; // Fireworks duration in milliseconds
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function showCelebrationMessage() {
  const message = document.getElementById("celebrationMessage");
  message.style.display = "block"; // Reveal the hidden message
}

function playCelebrationSong() {
  const celebrationSong = document.getElementById("celebrationSong");
  celebrationSong.play();
}

// // Test Celebration Button Handler
// document.getElementById("testFireworks").addEventListener("click", () => {
//   document.getElementById("countdown").style.display = "none"; // Hide countdown for test
//   showCelebrationMessage();
//   startFireworks();
//   playCelebrationSong();
// });

// Initialize countdown and update every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
