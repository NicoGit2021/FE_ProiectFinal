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


// Creare carduri de produse

const contCardProduse = document.querySelector("#contCardProduse");
const loadMoreBtn = document.querySelector("#loadMore");
let plante_interior = [];

let startingIndex = 0;
let endingIndex = 6;

async function fetchProducts() {
  try{
  const response = await fetch("http://localhost:3000/plante_interior");
  const produse = await response.json();
  plante_interior = produse;
  loadProducts();} 
  catch(error)
  {
    console.log(error);
  }
}

function loadProducts(){
  if (startingIndex >= plante_interior.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.removeEventListener("click", loadProducts);
    // alert("Nu mai sunt produse de afisat")
    loadMoreBtn.classList.add("btn-inactiv");
    loadMoreBtn.textContent = "Nu mai sunt produse de afisat";
    return;
  }
   const produseDeIncarcat = plante_interior.slice(startingIndex, endingIndex);
  for (let produs of produseDeIncarcat) {
    const card = creareCardProdus(produs);
    contCardProduse.appendChild(card);
  }

  startingIndex = endingIndex;
  endingIndex = Math.min(endingIndex + 6, plante_interior.length);
}

// Notificari
function afiseazaNotificareCos(mesaj) {
  const notificare = document.getElementById('notificare-cos');
  notificare.textContent = mesaj;
  notificare.classList.remove('ascuns');
  notificare.classList.add('vizibil');
  setTimeout(() => {
    notificare.classList.remove('vizibil');
    notificare.classList.add('ascuns');
  }, 2000);
}



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
    // alert("Produsul a fost adaugat in cos");
    afiseazaNotificareCos("Produs adăugat în coș!");
    
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

loadMoreBtn.addEventListener("click", loadProducts);
fetchProducts();



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
let cartStorage = localStorage.getItem('cart');
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
let spanCant = document.querySelector('#total-cant');
let totalInfo = document.querySelector("#totaluri");


cart_list.innerHTML = '';
let total = 0;
let totalCantitate = 0;

for (let product in cart){
  total += cart[product].pret * cart[product].cantitate;
  totalCantitate += cart[product].cantitate;

  let li = document.createElement('li');
  li.innerHTML = `<p>${product} - ${cart[product].cantitate} unitati.</p> <p>Pret per unitate: ${cart[product].pret} MDL</p>`;
  let buttonRemove = document.createElement('button');
  buttonRemove.classList.add("btn-remove");
  buttonRemove.textContent = 'Scoate o unitate';
  buttonRemove.onclick = () => removeFromCart(product);
  li.insertAdjacentElement('beforeend', buttonRemove);
  let horizontalLine = document.createElement("div")
  horizontalLine.classList.add("linie-orizontala");
  cart_list.appendChild(horizontalLine);
  cart_list.insertAdjacentElement('beforeend', li);

}
spanCant.textContent = totalCantitate;
spanPret.textContent = total;
}

const butonStergeCos = document.querySelector("#sterge-cos-btn");
butonStergeCos.addEventListener("click", () => {
  cart = {}; 
  updateDOM(); 

});

