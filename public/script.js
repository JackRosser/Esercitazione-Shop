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
    data.forEach((product) => {
      let card = document.createElement("div");
      card.innerHTML = `<img src=${product.imageUrl} alt=${product.name}>
      <h2>${product.name}</h2>
      <button>Vai ai dettagli</button>
  `;
      main.appendChild(card);
    });
  });
