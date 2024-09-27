const striveUrl = "https://striveschool-api.herokuapp.com/api/product/";
const striveKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY2NmE3ZTc5YzQ1ZjAwMTU2OWI0YzYiLCJpYXQiOjE3Mjc0MjUxNTAsImV4cCI6MTcyODYzNDc1MH0.bPDY09eiQVeTddUNBt1560Knd0qh4be5T4i7uCqMzIU";

class WeaponsGenerator {
  constructor(_name, _description, _brand, _imageUrl, _price, __id, _userId, _createdAt, _updatedAt, ___v) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
    this._id = __id;
    this.userId = _userId;
    this.createdAt = _createdAt;
    this.updatedAt = _updatedAt;
    this.__v = ___v;
  }
}

const catGenerator = function () {
  let section = document.querySelector("section");
  let div = document.createElement("div");
  div.className =
    "absolute md:static z-50 w-[300px] bottom-32 md:-bottom-[350px] h-[300px] text-white text-5xl flex flex-col justify-center items-center text-center";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "right";
  div.style.backgroundImage = `url("https://media1.giphy.com/media/GOAafaoBBuKY0/200w.gif?cid=6c09b952v28zvjjzzir4kcnza9o583vq6y1ua1z4zqrnhdqe&ep=v1_gifs_search&rid=200w.gif&ct=g")`;
  div.innerHTML = `<p>Prodotto Inviato con successo!!!</p>
        <button class="border py-2 px-10 mt-5 hover:bg-black rounded-md outline outline-2">OK</button>`;
  div.querySelector("button").addEventListener("click", function () {
    div.remove();
  });
  section.append(div);
};

const form = document.querySelector("form");
const weaponName = document.getElementById("weaponName");
const weaponDescription = document.getElementById("weaponDescription");
const weaponBrand = document.getElementById("weaponBrand");
const weaponImg = document.getElementById("weaponImg");
const weaponPrice = document.getElementById("weaponPrice");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newWeapon = new WeaponsGenerator(weaponName.value, weaponDescription.value, weaponBrand.value, weaponImg.value, weaponPrice.value);
  fetch(striveUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: striveKey
    },
    body: JSON.stringify(newWeapon)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Non hai eseguito l'accesso");
      }
      form.reset();
      catGenerator();
    })
    .catch((err) => {
      console.log("ERRORE: ", err);
    });
});

fetch(striveUrl, {
  headers: {
    Authorization: striveKey
  }
})
  .then((response) => {
    if (!response) {
      throw new Error("ERRORE MIO");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERRORE ", err);
  });
