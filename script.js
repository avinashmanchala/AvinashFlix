const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('preview-overlay');
const previewTitle = document.getElementById('preview-title');
const previewDescription = document.getElementById('preview-description');
const previewImage = document.getElementById('preview-image');
const closeBtn = document.querySelector('.close-btn');

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
  }, 3200);
});

const previews = {
  // your existing education, projects, etc...

  // Skill Categories (Netflix-style overlays)
  "Programming Languages": {
    title: "Programming Languages",
    description: "",
    icons: ["devicon-java-plain", "icon-placeholder:SQL", "icon-placeholder:C"]
  },
  "Web Technologies": {
    title: "Web Technologies",
    description: "",
    icons: ["devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain", "devicon-react-original", "devicon-nodejs-plain", "icon-placeholder:Express.js"]
  },
  "Databases": {
    title: "Databases",
    description: "",
    icons: ["icon-placeholder:MySQL", "icon-placeholder:MongoDB", "icon-placeholder:PostgreSQL"]
  },
  "Open Source Software": {
    title: "Open Source Software",
    description: "",
    icons: ["icon-placeholder:Spring Boot", "icon-placeholder:Hibernate", "icon-placeholder:JDBC"]
  },
  "Dev & Management Tools": {
    title: "Dev & Management Tools",
    description: "",
    icons: ["devicon-vscode-plain", "devicon-git-plain", "icon-placeholder:Postman", "icon-placeholder:Oracle VM", "icon-placeholder:Eclipse", "devicon-figma-plain", "icon-placeholder:Agile", "icon-placeholder:SDLC", "icon-placeholder:OOP", "devicon-jira-plain", "devicon-jenkins-plain"]
  },
  "Cloud Platforms": {
    title: "Cloud Platforms",
    description: "",
    icons: ["icon-placeholder:Digital Ocean", "devicon-googlecloud-plain", "devicon-amazonwebservices-plain"]
  },
  "Certifications": {
    title: "Certifications",
    description: "",
    icons: ["icon-placeholder:Accenture", "icon-placeholder:HPE"]
  }
};

// Show overlay
cards.forEach(card => {
  card.addEventListener('click', () => {
    const alt = card.alt;
    const data = previews[alt];
    if (data) {
      previewTitle.textContent = data.title;
      previewDescription.textContent = data.description;

      // Hide preview image for skill categories
      if (data.icons) {
        previewImage.style.display = "none";
      } else {
        previewImage.style.display = "block";
        previewImage.src = data.image;
      }

      // Clear previous icons
      const oldIcons = document.getElementById("preview-icons");
      if (oldIcons) oldIcons.remove();

      if (data.icons) {
        const iconDiv = document.createElement("div");
        iconDiv.id = "preview-icons";
        iconDiv.style.display = "flex";
        iconDiv.style.flexWrap = "wrap";
        iconDiv.style.gap = "1rem";
        iconDiv.style.marginTop = "1rem";

        data.icons.forEach(iconClass => {
          const iconEl = iconClass.startsWith("devicon-")
            ? Object.assign(document.createElement("i"), {
                className: iconClass,
                style: "font-size: 2.4rem; color: white;",
                title: iconClass.split("-")[1]
              })
            : Object.assign(document.createElement("span"), {
                className: "text-skill",
                textContent: iconClass.split(":")[1]
              });

          iconDiv.appendChild(iconEl);
        });

        document.querySelector(".preview-text").appendChild(iconDiv);
      }

      overlay.classList.remove('hidden');
    }
  });
});

// Close overlay
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
