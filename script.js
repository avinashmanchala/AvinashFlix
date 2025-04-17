const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('preview-overlay');
const previewTitle = document.getElementById('preview-title');
const previewDescription = document.getElementById('preview-description');
const previewImage = document.getElementById('preview-image');
const closeBtn = document.querySelector('.close-btn');

// Hide boot screen
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
  }, 3200);
});

// Card data
const previews = {
  "Education": {
    title: "Mining Education",
    description: "Completed Diploma & B.Tech in Mining with strong academic performance and field exposure.",
    bg: "assets/bg-mining.jpg",
    image: "assets/faces/mining.png"
  },
  "TCS Experience": {
    title: "TCS Engineer",
    description: "Built Java-based backend systems, improved uptime to 99.9%, and created 4 Power Apps.",
    bg: "assets/bg-tcs.jpg",
    image: "assets/faces/tcs.jpg"
  },
  "Pace University": {
    title: "Master’s in CS",
    description: "Explored AI/ML, Full Stack Development, and academic research at Pace University.",
    bg: "assets/bg-pace.jpg",
    image: "assets/faces/pace.jpg"
  },
  "USPARK": {
    title: "USPARK – AI Medical Assistant",
    description: "AI-powered healthcare platform for image segmentation and real-time diagnostics.",
    bg: "assets/bg-uspark.jpg",
    image: "assets/faces/uspark.jpg"
  },
  "SEW SMART": {
    title: "SEW SMART",
    description: "An eco-conscious fashion app that promotes sustainable trends and designer connections.",
    bg: "assets/bg-sewsmart.jpg",
    image: "assets/faces/sewsmart.jpg"
  },
  "Meal Planner": {
    title: "Meal Planner",
    description: "Built a meal planning and nutrition tracking platform using React and MongoDB.",
    bg: "assets/bg-mealplanner.jpg",
    image: "assets/faces/mealplanner.jpg"
  }
};

// Show overlay on card click
cards.forEach(card => {
  card.addEventListener('click', () => {
    const alt = card.alt;
    const data = previews[alt];
    if (data) {
      previewTitle.textContent = data.title;
      previewDescription.textContent = data.description;
      previewImage.src = data.image;
      overlay.style.backgroundImage = `url('${data.bg}')`;
      overlay.classList.remove('hidden');
    }
  });
});

// Close overlay
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
