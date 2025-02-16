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

// Factions and names
const factions = [
    {
        factionName: "Space Marines",
        armyName: "Space Marines",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/E3klPsu2fnbmMpPI.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Black Templars",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/HUaNPtMuYIcqgqLc.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Blood Angels",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/HUaNPtMuYIcqgqLc.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Dark Angels",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/P6ngvFo3DazkVG9u.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Deathwatch",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/ti0CSz5zmdOV6i5d.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Grey Knights",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/jiaNgTyPGN4Zg1XT.png"
    },
    {
        factionName: "Space Marines",
        armyName: "Space Wolves",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/1yy23xCgOiPzDxzX.png"
    },
    {
        factionName: "Armies of the Imperium",
        armyName: "Adepta Sororitas",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/t1tlSyxX3A4YNafB.png"
    },
    {
        factionName: "Armies of the Imperium",
        armyName: "Adeptus Custodes",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/sgIDGWkSy3tBrs6p.png"
    },
    {
        factionName: "Armies of the Imperium",
        armyName: "Adeptus Mechanicus",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/QNJmkh81de8LIGsb.png"
    },
    {
        factionName: "Armies of the Imperium",
        armyName: "Astra Militarum",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/rFOd8MUSwEf62jEF.png"
    },
    {
        factionName: "Forces of Chaos",
        armyName: "Chaos Space Marines",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/Az1sbid9vf70LxgH.png"
    },
    {
        factionName: "Forces of Chaos",
        armyName: "Death Guard",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/avXx2A2Tg9Lq0uaO.png"
    },
    {
        factionName: "Forces of Chaos",
        armyName: "Thousand Sons",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/rHQxuCXsIwlI7b6X.png"
    },
    {
        factionName: "Forces of Chaos",
        armyName: "World Eaters",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/XdS8WoT77UeFZE7Y.png"
    },
    {
        factionName: "Forces of Chaos",
        armyName: "Chaos Daemons",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/2T5LL8Yiv9Nfyq0X.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Aeldari",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/t2qJk8gAjIljXsFY.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Drukhari",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/J00KciwjB12FePIG.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Tyranids",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/HdwYL7wQbk3eX4oy.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Genestealer Cults",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/dd6yDaN65nomf8ok.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Leagues of Votann",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/aMlNFtJXYIg9msGt.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Necrons",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/cNOqzW29QRxjTt1J.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "Orks",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/Y4uxrreMA6o7smsi.png"
    },
    {
        factionName: "The Xenos Threat",
        armyName: "T'au Empire",
        imageUrl:
        "https://warhammer40000.com/wp-content/uploads/2023/07/erQUZLX1gceVp35i.png"
    },
];

createFactionCard(factions);

const allLinkLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
  filteredFactions = createFactionCard(factions);
});

const marinesLink = document.querySelector("#marines");
marinesLink.addEventListener("click", () => {
  filteredFactions = createFactionCard(factions.filter(faction => faction.factionName == "Space Marines"));
});

const imperiumLink = document.querySelector("#imperium");
imperiumLinkLink.addEventListener("click", () => {
  filteredFactions = createFactionCard(factions.filter(faction => faction.factionName == "Armies of the Imperium"));
});

const chaosLink = document.querySelector("#chaos");
chaosLinkLink.addEventListener("click", () => {
  filteredFactions = createFactionCard(factions.filter(faction => faction.factionName == "Forces of Chaos"));
});

const xenosLink = document.querySelector("#xenos");
xenosLinkLink.addEventListener("click", () => {
  filteredFactions = createFactionCard(factions.filter(faction => faction.factionName == "The Xenos Threat"));
});

function createFactionCard(filteredFactions){
  document.querySelector(".res-grid").innerHTML = "";
  filteredFactions.forEach(faction => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let army = document.createElement("h4");
    let img = document.createElement("img");

    name.textContent = faction.factionName;
    army.innerHTML = `<span class="label">Location: </span> ${faction.armyName} `;
    img.setAttribute("src", faction.imageUrl);
    img.setAttribute("alt", `${faction.factionName}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 400);
    img.setAttribute("height", auto);

    card.appendChild(name);
    card.appendChild(army);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
};

// Thank you page
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `You are the first!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
