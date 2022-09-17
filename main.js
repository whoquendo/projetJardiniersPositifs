const menuIconMobil = document.querySelector('.menu');
const listMenuMobil = document.querySelector('.menu-mobil');


menuIconMobil.addEventListener('click', toggleMobilMenu);



function toggleMobilMenu() {
    listMenuMobil.classList.toggle('innactive');
}

// Get the modal
var modalJardin = document.getElementById("myModalJardin");
var modalConstrution = document.getElementById("myModalConstrution");
var modalElectricite = document.getElementById("myModalElectricite");

// Get the button that opens the modal
var btnJardin = document.querySelector(".button-masinfo-jardin");
var btnConstrution = document.querySelector(".button-masinfo-constrution");
var btnEletricite = document.querySelector(".button-masinfo-electricite");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];


// When the user clicks the button, open the modal 
btnJardin.onclick = function() {
  modalJardin.style.display = "block";
}

btnConstrution.onclick = function() {
  modalConstrution.style.display = "block";
}

btnEletricite.onclick =function() {
  modalElectricite.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalJardin.style.display = "none";
}

span1.onclick = function() {
  modalConstrution.style.display = "none";
}

span2.onclick = function() {
  modalElectricite.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalJardin || event.target == modalConstrution || event.target == modalElectricite) {
    modalJardin.style.display = "none";
    modalConstrution.style.display = "none";
    modalElectricite.style.display = "none";
  }
}