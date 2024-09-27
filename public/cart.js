let cartToggle = false;
const body = document.querySelector("body");
let myShop = JSON.parse(localStorage.getItem("cart"));
console.log(myShop);

document.getElementById("cart").addEventListener("click", function () {
  if (cartToggle) {
    cartToggle = false;
    let aside = document.querySelector("aside");
    if (aside) {
      aside.remove();
    }
  } else {
    cartToggle = true;
    let aside = document.createElement("aside");
    aside.className = "absolute bg-white right-0 z-50 top-0 w-full h-[300px] flex flex-col";
    aside.style.animation = "cart 500ms both";

    if (myShop.length > 0) {
      for (let i = 0; i < myShop.length; i++) {
        let div = document.createElement("div");
        div.className = "flex items-center justify-start bg-slate-200 p-3 font-black hover:bg-slate-400 cursor-pointer hover:text-white";

        let divText = document.createElement("div");
        divText.innerText = myShop[i].name;
        divText.style.flexGrow = "1";

        let img = document.createElement("img");
        img.src = myShop[i].imageUrl;
        img.style.height = "50px";
        img.style.width = "50px";
        img.style.marginRight = "1rem";

        let button = document.createElement("button");
        button.className = "text-red-500 bg-slate-400 p-2 rounded-full hover:bg-white hover:text-black active:text-white active:bg-black ml-5";
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>`;

        button.addEventListener("click", function () {
          myShop.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(myShop));
          div.remove();
        });

        div.append(divText, img, button);
        aside.appendChild(div);
      }
    } else {
      let emptyMessage = document.createElement("div");
      emptyMessage.className = "p-5 text-center";
      emptyMessage.innerText = "Il carrello è vuoto.";
      aside.appendChild(emptyMessage);
    }

    body.appendChild(aside);
  }
});
