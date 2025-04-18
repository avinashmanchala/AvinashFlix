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
  },

  "Programming Languages": {
  title: "Programming Languages",
  description: "",
  image: "assets/skills/programming.svg",
  icons: ["devicon-java-plain", "icon-placeholder:SQL", "icon-placeholder:C"]
},
"Web Technologies": {
  title: "Web Technologies",
  description: "",
  image: "assets/skills/webtech.svg",
  icons: ["devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-react-original", "devicon-nodejs-plain", "icon-placeholder:Express.js"]
},
"Databases": {
  title: "Databases",
  description: "",
  image: "assets/skills/database.svg",
  icons: ["icon-placeholder:MySQL", "icon-placeholder:MongoDB", "icon-placeholder:PostgreSQL"]
},
"Open Source Software": {
  title: "Open Source Software",
  description: "",
  image: "assets/skills/opensource.svg",
  icons: ["icon-placeholder:Spring Boot", "icon-placeholder:Hibernate", "icon-placeholder:JDBC"]
},
"Dev & Management Tools": {
  title: "Dev & Management Tools",
  description: "",
  image: "assets/skills/devtools.svg",
  icons: ["devicon-vscode-plain", "devicon-git-plain", "icon-placeholder:Postman", "icon-placeholder:Oracle VM", "icon-placeholder:Eclipse", "devicon-figma-plain", "icon-placeholder:Agile", "icon-placeholder:SDLC", "icon-placeholder:OOP", "devicon-jira-plain", "devicon-jenkins-plain"]
},
"Cloud Platforms": {
  title: "Cloud Platforms",
  description: "",
  image: "assets/skills/cloud.svg",
  icons: ["icon-placeholder:Digital Ocean", "devicon-googlecloud-plain", "devicon-amazonwebservices-plain"]
},
"Certifications": {
  title: "Certifications",
  description: "",
  image: "assets/skills/certifications.svg",
  icons: ["icon-placeholder:Accenture", "icon-placeholder:HPE"]
}

  
};

cards.forEach(card => {
    card.addEventListener('click', () => {
      const alt = card.alt;
      const data = previews[alt];
      if (data) {
        previewTitle.textContent = data.title;
        previewDescription.textContent = data.description;
        previewImage.src = data.image;
        overlay.style.backgroundImage = data.bg ? `url('${data.bg}')` : "none";
  
        // Clear old icons if any
        const iconContainer = document.getElementById("preview-icons");
        if (iconContainer) iconContainer.remove();
  
        if (data.icons) {
          const iconDiv = document.createElement("div");
          iconDiv.id = "preview-icons";
          iconDiv.style.marginTop = "1.2rem";
          iconDiv.style.display = "flex";
          iconDiv.style.flexWrap = "wrap";
          iconDiv.style.gap = "1rem";
  
          data.icons.forEach(iconClass => {
            const iconEl = iconClass.startsWith("devicon-")
              ? Object.assign(document.createElement("i"), {
                  className: iconClass,
                  style: "font-size: 2rem;",
                  title: iconClass.split("-")[1]
                })
              : Object.assign(document.createElement("span"), {
                  className: "icon-placeholder",
                  textContent: iconClass.split(":")[1],
                  style: "font-size: 0.9rem; padding: 0.4rem 0.6rem; background: #e50914; border-radius: 4px;"
                });
  
            iconDiv.appendChild(iconEl);
          });
  
          document.querySelector(".preview-text").appendChild(iconDiv);
        }
  
        overlay.classList.remove("hidden");
      }
    });
  });
  

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
