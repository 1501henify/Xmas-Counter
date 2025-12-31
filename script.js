/* ===== COUNTDOWN LOGIC ===== */
function getNextChristmas() {
  const now = new Date();
  const year = now.getFullYear();
  let christmas = new Date(year, 11, 25, 0, 0, 0);

  if (now > christmas) {
    christmas = new Date(year + 1, 11, 25, 0, 0, 0);
  }

  return christmas.getTime();
}

let targetTime = getNextChristmas();

function updateCountdown() {
  const now = Date.now();
  const diff = targetTime - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== SNOW GENERATOR ===== */
const snowCount = 60;

for (let i = 0; i < snowCount; i++) {
  const snow = document.createElement("div");
  snow.className = "snowflake";

  const size = Math.random() * 4 + 2;
  snow.style.width = `${size}px`;
  snow.style.height = `${size}px`;
  snow.style.left = `${Math.random() * 100}vw`;
  snow.style.animationDuration = `${Math.random() * 6 + 6}s`;
  snow.style.animationDelay = `${Math.random() * 6}s`;
  snow.style.opacity = Math.random() * 0.6 + 0.3;

  document.body.appendChild(snow);
}
