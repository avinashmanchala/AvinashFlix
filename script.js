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
    "Diploma in Mining": {
  title: "Diploma in Mining",
  description: "Completed Diploma at Govt Polytechnic College (2015–2018) with 85.5%. Gained strong fundamentals in mining and field techniques.",
  image: "assets/faces/diploma_photo.png"
},
"B.Tech in Mining": {
  title: "B.Tech in Mining",
  description: "Graduated from Aditya Engineering College (2018–2021) with 8.65 GPA. Worked on real-time models like Bucket Wheel Excavator.",
  image: "assets/faces/btech_photo.png"
},
"Master's in CS": {
  title: "Master’s in Computer Science",
  description: "Pursuing MS at Pace University (2023–2025). Focusing on AI/ML, Full Stack Development, and academic research projects.",
  image: "assets/faces/masters_photo.png"
},

  
  "TCS Experience": {
    title: "Junior Java Developer",
    description: "Built Java-based backend systems, improved uptime to 99.9%, and created 4 Power Apps.",
    image: "assets/faces/tcs_photo.png"
  },
  "HP Simulation": {
  title: "Hewlett Packard Simulation",
  description: "Completed HP Enterprise virtual internship simulating enterprise tech solutions, improving client infrastructure and automation.",
  image: "assets/faces/hpe_photo.png"
},
"Accenture Simulation": {
  title: "Accenture Simulation",
  description: "Worked on a virtual client case study to deliver innovative technology consulting solutions and data-driven business insights.",
  image: "assets/faces/accenture_photo.png"
},
  
  "Pace University": {
    title: "Master’s in CS",
    description: "Explored AI/ML, Full Stack Development, and academic research at Pace University.",
    image: "assets/faces/mining.png"
  },
  "USPARK": {
    title: "USPARK – AI Medical Assistant",
    description: "AI-powered healthcare platform for image segmentation and real-time diagnostics.",
    image: "assets/faces/mining.png"
  },
  "SEW SMART": {
    title: "SEW SMART",
    description: "An eco-conscious fashion app that promotes sustainable trends and designer connections.",
    image: "assets/faces/mining.png"
  },
  "Meal Planner": {
    title: "Meal Planner",
    description: "Built a meal planning and nutrition tracking platform using React and MongoDB.",
    image: "assets/faces/mining.png"
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
