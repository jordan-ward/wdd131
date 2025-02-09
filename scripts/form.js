// Get Date
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;

// List of Products
const products = [
    {
        id: "select",
        name: "Select a Product"
    },
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const dropdown = document.getElementById('product');

products.forEach(product => {
    const productElement = document.createElement('option');
    productElement.id = product.id;
    productElement.value = product.name;
    productElement.text = product.name;
    dropdown.add(productElement)
})

const indexToDisable = 0;

if (dropdown[indexToDisable]) {
    dropdown[indexToDisable].disabled = true;
}

// Thank you page
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
