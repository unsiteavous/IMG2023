const projects = [
  {
    name: "Mickael",
    promo: "DWWM",
    website: "https://creative-zabaione-fedf33.netlify.app/",
    image: "./images/dwwm/mickael.png",
  },
  {
    name: "Sélim",
    promo: "DWWM",
    website: "https://selimcaquais.github.io/MidnightRun/",
    image: "./images/dwwm/selim.png",
  },
  {
    name: "Boubacar",
    promo: "DWWM",
    website: "https://63c6bee01de77f5170fcdeaa--eloquent-cranachan-1870ca.netlify.app/",
    image: "./images/dwwm/boubacar.png",
  },
  {
    name: "Olivier",
    promo: "DWWM",
    website: "https://cityskater.netlify.app/",
    image: "./images/dwwm/olivier.png",
  },
  {
    name: "Gael",
    promo: "DWWM",
    website: "https://space-invador.netlify.app/",
    image: './images/dwwm/gael.png',
  },
  {
    name: "Maïlys",
    promo: "DWWM",
    website: "https://aria1986.github.io/bomberman/",
    image: './images/dwwm/mailys.png',
  },
  {
    name: "Lucas",
    promo: "DWWM",
    website: "https://63c740c0eb5c3066cf00835c--startling-halva-61cd17.netlify.app/",
    image: "./images/dwwm/lucas.gif",
  }
];

const htmlProjectList = document.querySelector(".project_list");

function displayProjects() {
  console.log(htmlProjectList);

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    htmlProjectList.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const listItem = document.createElement("li");

  const projectLink = document.createElement("a");
  projectLink.href = project.website ? project.website : "https://google.com";
  projectLink.target = "_blank";

  const projectCard = document.createElement("div");
  projectCard.classList.add("game_card");

  const projectImage = document.createElement("img");
  projectImage.src = project.image ? project.image : "./images/default.png";

  const projectOwner = document.createElement("p");
  projectOwner.textContent = `${project.promo} - ${project.name}`;

  listItem.appendChild(projectLink);
  projectLink.appendChild(projectCard);
  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectOwner);

  return listItem;
}

displayProjects();
