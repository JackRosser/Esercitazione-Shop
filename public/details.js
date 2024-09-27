let box = document.getElementById("ciaoste");
let ciaoste = function () {
  box.classList.toggle("translate-x-0");
};
let adios = document.getElementById("esc");
let esc = function () {
  box.classList.remove("translate-x-0");
};

let main = document.querySelector("main");
const striveUrl = "https://striveschool-api.herokuapp.com/api/product/";
const striveKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE3ZTc5YzQ1ZjAwMTU2OWI0YzYiLCJpYXQiOjE3Mjc0MjUxNTAsImV4cCI6MTcyODYzNDc1MH0.bPDY09eiQVeTddUNBt1560Knd0qh4be5T4i7uCqMzIU";

const address = new URLSearchParams(location.search);
const productId = address.get("weaponId");

fetch(`${striveUrl}/${productId}`, {
  headers: {
    Authorization: striveKey
  }
})
  .then((response) => {
    if (!response) {
      throw new Error("Errore comunicazione");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let card = document.createElement("div");
    card.style.backgroundImage = `url(${data.imageUrl})`;
    card.style.backgroundSize = "contain";
    card.style.backgroundRepeat = "no-repeat";
    card.style.backgroundPosition = "center center";
    card.style.minHeight = "400px";
    card.style.backgroundColor = "black";
    let details = document.createElement("div");
    details.style.alignItems = "start";
    details.style.padding = "1rem";
    details.innerHTML = `<h1 class="text-5xl font-black">${data.name}</h1>
    <h2 class="text-sm">${data.description}</h2>`;
    main.append(card, details);
  });
