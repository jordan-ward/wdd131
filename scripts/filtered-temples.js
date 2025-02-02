// Get Date
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;


// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Meridian Idaho",
      location: "Meridian, Idaho",
      dedicated: "2014, August, 23",
      area: 67331,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-46599.jpg" 
    },
    {
      templeName: "Manila Philippines",
      location: "Manila, Philippines",
      dedicated: "1982, August, 25",
      area: 26683,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44348.jpg"
    },
    {
      templeName: "Boise Idaho",
      location: "Boise, Idaho",
      dedicated: "1984, May, 25",
      area: 35868,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-3853.jpg"
    },
  ];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  filteredTemples = createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  filteredTemples = createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  filteredTemples = createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  filteredTemples = createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  filteredTemples = createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples){
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h4");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span> ${temple.location} `;
    dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated} `;
    area.innerHTML = `<span class="label">Size: </span> ${temple.area} `;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 400);
    img.setAttribute("height", 250);

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
};