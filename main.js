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
var modalApropos = document.getElementById("myModalApropos");
var modalServices = document.getElementById("myModalServices");
var modalContacts = document.getElementById("myModalContacts");

// Get the button that opens the modal
var btnJardin = document.querySelector(".button-masinfo-jardin");
var btnConstrution = document.querySelector(".button-masinfo-constrution");
var btnEletricite = document.querySelector(".button-masinfo-electricite");
var btnApropos = document.querySelector(".button-apropos");
var btnAproposmobil = document.querySelector(".button-apropos-mobil");
var btnServices = document.querySelector(".button-services");
var btnServicesMobil = document.querySelector(".button-services-mobil");
var btnContacts = document.querySelector(".button-contacts");
var btnContactsMobil = document.querySelector(".button-contacts-mobil");
var btndevis = document.querySelector(".button-devis");


//videos
var videoJardin = document.querySelector('.video-jardin');
var videoConstrution = document.querySelector('.video-constrution');
var videoElectricite = document.querySelector('.video-electricite');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
btnJardin.onclick = function() {
  modalJardin.style.display = "block";
  console.log(`es el video`);
  videoJardin.play();
}

btnConstrution.onclick = function() {
  modalConstrution.style.display = "block";
  videoConstrution.play();
}

btnEletricite.onclick =function() {
  videoElectricite.play();
  modalElectricite.style.display = "block";
}

btnApropos.onclick = function() {
  modalApropos.style.display = "block";
}

btnAproposmobil.onclick = function() {
  modalApropos.style.display = "block";
}

btnServices.onclick = function() {
  modalServices.style.display = "block";
}

btnServicesMobil.onclick = function() {
  modalServices.style.display = "block";
}

btnContacts.onclick = function() {
  modalContacts.style.display = "block";
}

btnContactsMobil.onclick = function() {
  modalContacts.style.display = "block";
}

btndevis.onclick = function() {
  modalContacts.style.display = "block";
}




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalJardin.style.display = "none";
  videoJardin.load();
}

span1.onclick = function() {
  modalConstrution.style.display = "none";
  videoConstrution.load();
}

span2.onclick = function() {
  modalElectricite.style.display = "none";
  videoElectricite.load();
}

span3.onclick = function() {
  modalApropos.style.display = "none";
}

span4.onclick = function() {
  modalServices.style.display = "none";
}

span5.onclick = function() {
  modalContacts.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalJardin || event.target == modalConstrution || event.target == modalElectricite || event.target == modalApropos || event.target == modalServices || event.target == modalContacts) {
    modalJardin.style.display = "none";
    modalConstrution.style.display = "none";
    modalElectricite.style.display = "none";
    modalApropos.style.display = "none";
    modalServices.style.display = "none";
    modalContacts.style.display = "none";
    videoJardin.load();
    videoConstrution.load();
    videoElectricite.load();
  }
}