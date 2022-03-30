/* Sélection des éléments HTML */
let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let map = document.querySelector('div.map');
let reseau = document.querySelector('div.reseau');
let nav = document.querySelector('nav');
let grid = document.querySelector('section');
let footer = document.querySelector('footer');

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault();
  burger.classList.toggle('open');
  ul.classList.toggle('open');
  map.classList.toggle('open');
  reseau.classList.toggle('open');
  nav.classList.toggle('open');
  grid.classList.toggle('open');
  footer.classList.toggle('open');
})