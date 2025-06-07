// import {createProduct, getProduct, getProducts, updateProduct, deleteProduct} from "./api";

// Slider
let buttonNextSlide = document.querySelector(".next");
let buttonPrevSlide = document.querySelector(".prev");
let totalSlides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlidePosition() {
  const slidesContainer = document.getElementById("slides");
  const slideWidth = totalSlides[0].offsetWidth;
  let currentSlideWidth = currentIndex * slideWidth;
  slidesContainer.style.transform = `translateX(-${currentSlideWidth}px)`;
}

buttonNextSlide.addEventListener("click", () => {
  if (currentIndex < totalSlides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});

buttonPrevSlide.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides.length - 1;
  }
  updateSlidePosition();
});

// ----------------------------------------------------------------------------

let plante_interior = [
        {
            "id": 1,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "ficus elastica", 
            "title": "Ficus elastica (Ficus cauciuc)",
            "description": "Plantă cu frunze mari, lucioase, verzi sau cu margini roșiatice. Ușor de întreținut, preferă lumină indirectă și udare moderată.",
            "price": 500
        },
        {
            "id": 2,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "monstera deliciosa",
            "title": "Monstera deliciosa",
            "description": "Cunoscută pentru frunzele mari, perforate, cu aspect exotic. Are nevoie de lumină filtrată și umiditate moderată.",
            "price": 400
        }, 
        {
            "id": 3,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "monstera deliciosa",
            "title": "Ficus lyrata",
            "description": " Frunze mari, lucioase, în formă de vioară. Preferă lumină puternică și udare regulată.",
            "price": 600
        }, 
        {
            "id": 4,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "monstera deliciosa",
            "title": "Ficus lyrata",
            "description": " Frunze mari, lucioase, în formă de vioară. Preferă lumină puternică și udare regulată.",
            "price": 600
        }, 
        {
            "id": 5,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "monstera deliciosa",
            "title": "Dracaena marginata",
            "description": "Frunze subțiri, lungi, cu margini roșii. Preferă lumină indirectă și udare moderată.",
            "price": 450
        },
        {
            "id": 6,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "monstera deliciosa",
            "title": "Philodendron",
            "description": "Planta cu frunze mari, verzi, ușor de întreținut. Se adaptează la condiții de lumină scăzută.",
            "price": 450
          },
          {
            "id": 7,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "sansevieria",
            "title": "Sansevieria trifasciata (Limba soacrei)",
            "description": "Frunze verticale, verzi cu dungi galbene. Foarte rezistentă și ușor de întreținut.",
            "price": 300
          },
          {
            "id": 8,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "epipremnum aureum",
            "title": "Epipremnum aureum (Pothos)",
            "description": "Planta cățărătoare cu frunze verzi sau variegate. Crește rapid și se adaptează ușor.",
            "price": 250
          },
          {
            "id": 9,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "codiaeum variegatum",
            "title": "Codiaeum variegatum (Croton)",
            "description": "Frunze colorate în nuanțe de galben, roșu și verde. Necesită lumină puternică și udare regulată.",
            "price": 550
          },
          {
            "id": 10,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "neoregalia",
            "title": "Neoregalia",
            "description": "Planta cu frunze colorate și flori spectaculoase. Preferă lumină indirectă și umiditate ridicată.",
            "price": 650
          },
          {
            "id": 11,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "bromelia",
            "title": "Bromelia",
            "description": "Planta cu flori colorate și frunze rigide. Necesită lumină puternică și udare moderată.",
            "price": 700
          },
          {
            "id": 12,
            "img": "Imagini/ficus-elastica.jpg",
            "alt": "alocasia polly",
            "title": "Alocasia Polly",
            "description": "Frunze mari, lucioase, în formă de inimă. Preferă lumină indirectă și umiditate ridicată.",
            "price": 600
          }
        ]

// Creare carduri de produse

let contCardProduse = document.querySelector("#contCardProduse");


function creareCardProdus(produs){

  let article = document.createElement("article");
  article.classList.add("card-produs");
  article.dataset.id = produs.id; 

  let divImagine = document.createElement("div");
  divImagine.classList.add("div-img2");

  let imgProdus = document.createElement("img");
imgProdus.src = produs.img;  
  imgProdus.alt = produs.alt;

  let titlu_produs = document.createElement("h5");
  titlu_produs.textContent = produs.title;

  let descriere = document.createElement("p");
  descriere.textContent = produs.description;

  let divPretButon = document.createElement("div");
   divPretButon.classList.add('blocul_pretului');

  let numePret = document.createElement("span");
  numePret.classList.add('nume_pret');


  let pretProdus = document.createElement('span');
  pretProdus.classList.add('pret_produs');
  pretProdus.textContent = `${produs.price} MDL`;

  let spanButon = document.createElement("span");
   spanButon.classList.add('span_buton');

  let butonCos = document.createElement("button");
  butonCos.classList.add('buton_cos');
  butonCos.id = produs.id;
  butonCos.textContent = 'Adaugă în coș';
 
  butonCos.addEventListener("click", () => {
    addToCart(produs.title, produs.price);
  });
  
   spanButon.appendChild(butonCos);
   divPretButon.insertAdjacentElement("beforeend", numePret);
   divPretButon.insertAdjacentElement("beforeend", pretProdus);
   divPretButon.insertAdjacentElement("beforeend", spanButon);
   divImagine.appendChild(imgProdus);

   article.insertAdjacentElement("beforeend",divImagine );
   article.insertAdjacentElement("beforeend", titlu_produs);
   article.insertAdjacentElement("beforeend", descriere);
   article.insertAdjacentElement("beforeend", divPretButon);

return article;
}


// Incarcare produse pe pagina

let startingIndex = 0;
let endingIndex = 6;
const loadMoreBtn = document.querySelector("#loadMore");

function loadProducts() {
  if (startingIndex >= plante_interior.length) {
    loadMoreBtn.disabled = true;
    return;
  }
  const produseDeIncarcat = plante_interior.slice(startingIndex, endingIndex);
  for (let produs of produseDeIncarcat) {
    const article = creareCardProdus(produs);
    contCardProduse.insertAdjacentElement("beforeend", article);
}
  };

  startingIndex = endingIndex;
  endingIndex = Math.min(endingIndex + 6, plante_interior.length);

  
  if (startingIndex >= plante_interior.length) {
    loadMoreBtn.disabled = true;
  }



loadProducts();

loadMoreBtn.addEventListener("click", loadProducts);

const butoaneCos = document.querySelectorAll(".buton_cos");
butoaneCos.forEach((buton)=>
  buton.addEventListener("click", ()=>{
    addToCart(produs.id, produs.price);
  })
)
// Cosul de cumparaturi



let cart = {};
// --------------------------------
const cartContainer = document.querySelector("#shopping-cart");
const showHideCartSpan = document.querySelector("#show-hide-cart");
const cartBtn = document.querySelector("#cart-btn"); 

let isCartOpen = false;

cartBtn.addEventListener("click", () => {
  isCartOpen = !isCartOpen;
  showHideCartSpan.textContent = isCartOpen ? "Închide" : "Deschide";
  cartContainer.style.display = isCartOpen ? "block" : "none";
});

// -----------------------------------
cartStorage = localStorage.getItem('cart');
if(cartStorage !== undefined){
  cart = JSON.parse(cartStorage);
  updateDOM();
}

function saveCart() {
  let cartString = JSON.stringify(cart);
  console.log(cartString);
  localStorage.setItem('cart', cartString);
}



function addToCart(product, price){
  if(cart[product] !== undefined){
    cart[product].cantitate++;
  }else{
    cart[product]= {cantitate: 1, pret: price};
  }
  updateDOM();
  saveCart();
}

function removeFromCart(product){
  if(cart[product].cantitate > 1){
    cart[product].cantitate--;
  }else{
    delete cart[product];
  }
  updateDOM();
  saveCart();
}

function updateDOM(){
let cart_list = document.querySelector('#cart-list');
let spanPret = document.querySelector('#total');

cart_list.innerHTML = '';
let total = 0;

for (let product in cart){
  total += cart[product].pret * cart[product].cantitate;
  let li = document.createElement('li');
  li.innerHTML = `${product} - ${cart[product].cantitate} unitati. Pret per unitate: ${cart[product].pret}`;
  let buttonRemove = document.createElement('button');
  buttonRemove.classList.add("btn-remove");
  buttonRemove.textContent = 'Scoate o unitate';
  buttonRemove.onclick = () => removeFromCart(product);
  li.insertAdjacentElement('beforeend', buttonRemove);
  cart_list.insertAdjacentElement('beforeend', li);

}

spanPret.textContent = total;
}

const butonStergeCos = document.querySelector("#sterge-cos-btn");
butonStergeCos.addEventListener("click", () => {
  cart = {}; 
  updateDOM(); 
  localStorage.removeItem('cart'); 
});
  
  
