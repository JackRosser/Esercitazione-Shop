let box = document.getElementById("asbrout");
let ciaoste = document.getElementById("ciaoste");
let boxToggle = false;

box.addEventListener("click", function () {
  if (!boxToggle) {
    boxToggle = true;
    ciaoste.classList.add("translate-x-0");
    ciaoste.classList.remove("-translate-x-full");
  } else {
    boxToggle = false;
    ciaoste.classList.remove("translate-x-0");
    ciaoste.classList.add("-translate-x-full");
  }
});

let main = document.querySelector("main");
const striveUrl = "https://striveschool-api.herokuapp.com/api/product/";
const striveKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE3ZTc5YzQ1ZjAwMTU2OWI0YzYiLCJpYXQiOjE3Mjc0MjUxNTAsImV4cCI6MTcyODYzNDc1MH0.bPDY09eiQVeTddUNBt1560Knd0qh4be5T4i7uCqMzIU";

fetch(striveUrl, {
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
    main.innerHTML = "";
    data.forEach((product) => {
      let card = document.createElement("div");
      card.innerHTML = `<img src=${product.imageUrl} alt=${product.name}>
      <h2>${product.name}</h2>
      <button onclick="window.location.href='./details.html?weaponId=${product._id}'">Vai ai dettagli</button>
  `;
      main.appendChild(card);
    });
  });

window.onload = function () {
  document.querySelector("main").style.opacity = 1;
};
