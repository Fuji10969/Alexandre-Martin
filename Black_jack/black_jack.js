/************************Création de varibles */
var player = [];
var pc = [];
var oki = 0;
var toki = 0;
var addJoueur = 0;
var addOrdinateur = 0;

var totalPlayer = [];
var totalPc = [];

/******************************************************* */

function modulo(score, array, span, span2, somme, card, total) {
  card = score % 13;
  somme = 0;

  if (card == 1) {
    card = 11;
    array.push(card);
  } else {
    if (card > 10 || card == 0) {
      card = 10;
      array.push(card);
    } else {
      card = card;
      array.push(card);
    }
  }

  for (let i = 0; i < array.length; i++) {
    somme += array[i];
  }

  if (somme > 21) {
    array.forEach((element) => {
      if (element == 11 && somme > 21) {
        somme = somme - 10;
      }
    });
  }

  if (somme == 21) {
    total.push(somme);
    document.getElementById(span).innerHTML = " " + somme + " Black jack !!!";
    document.getElementById(span2).innerHTML = "Perdu ...  ";
    document.getElementById("carte").disabled = true;
    document.getElementById("reste").disabled = true;
  }
  if (somme > 21) {
    total.push(somme);
    document.getElementById(span).innerHTML = somme + " " + "Perdu ...  ";
    document.getElementById(span2).innerHTML = "Gagné ! ";

    document.getElementById("carte").disabled = true;
    document.getElementById("reste").disabled = true;
  }

  if (somme < 21) {
    total.push(somme);
    document.getElementById(span).innerHTML = somme;
  }

  return false;
}

/*Fonction permettant de créer un nombre aleatoire que l'on va associer à la source de l'image afin de
modifier son numéro. Ainsi la carte de départ sera générée aléatoirement
Ici la fonction est pour la carte appartenant à l'ordinateur. */
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let carteAleatoirePc = random(1, 52);
document.getElementById("ordinateur").innerHTML =
  '<img src="Black_jack/images_black_jack/' + carteAleatoirePc + '.jpg"/>';
modulo(
  carteAleatoirePc,
  pc,
  "scorePc",
  "scorePlayer",
  toki,
  addOrdinateur,
  totalPc
);

/*Fonction permettant de créer un nombre aleatoire que l'on va associer à la source de l'image afin de 
  modifier son numéro. Ainsi la carte de départ sera générée aléatoirement Ici la fonction est pour la 
  carte appartenant au joueur. */

let carteAleatoireJoueur = random(1, 52);
document.getElementById("joueur").innerHTML =
  '<img src="Black_jack/images_black_jack/' + carteAleatoireJoueur + '.jpg"/>';

modulo(
  carteAleatoireJoueur,
  player,
  "scorePlayer",
  "scorePc",
  oki,
  addJoueur,
  totalPlayer
);

/*************************************************************************************** */
/*Ajout carte joueur : Fonction s'activant uniquement après avoir cliqué sur le bouton carte.
Permet d'ajouter une nouvelle carte aléatoire */

function ajoutCarteJoueur() {
  let addPlayerCard = random(1, 52);
  modulo(
    addPlayerCard,
    player,
    "scorePlayer",
    "scorePc",
    oki,
    addJoueur,
    totalPlayer
  );
  document.getElementById("joueur").innerHTML +=
    '<img src="Black_jack/images_black_jack/' + addPlayerCard + '.jpg"/>';
}

/***********************************************************************Ajout de nouvelles cartes*/

/*Ajout carte ordinateur : Fonction s'activant uniquement après avoir cliqué sur le bouton RESTE.
Permet d'ajouter une nouvelle carte aléatoire */

function ajoutCartePc() {
  let lastTotalPlayer = totalPlayer[totalPlayer.length - 1];
  let lastTotalPc = totalPc[totalPc.length - 1];

  while (lastTotalPc <= lastTotalPlayer) {
    let addPcCard = random(1, 52);
    modulo(
      addPcCard,
      pc,
      "scorePc",
      "scorePlayer",
      toki,
      addOrdinateur,
      totalPc
    );
    document.getElementById("ordinateur").innerHTML +=
      '<img src="Black_jack/images_black_jack/' + addPcCard + '.jpg"/>';

    lastTotalPc = totalPc[totalPc.length - 1];
    if (lastTotalPc > lastTotalPlayer && lastTotalPc <= 21) {
      document.getElementById("scorePlayer").innerHTML =
        lastTotalPlayer + " " + " tu as perdu ...  ";
      document.getElementById("scorePc").innerHTML =
        lastTotalPc + " " + " La banque a gagné ...  ";
    } else {
      document.getElementById("scorePlayer").innerHTML =
        lastTotalPlayer + " " + " tu as gagné !!! ";
    }
  }

  if (lastTotalPc > lastTotalPlayer && lastTotalPc <= 21) {
    document.getElementById("scorePlayer").innerHTML =
      lastTotalPlayer + " " + " tu as perdu ...  ";
    document.getElementById("scorePc").innerHTML =
      lastTotalPc + " " + " La banque a gagné ...  ";
  } else {
    document.getElementById("scorePlayer").innerHTML =
      lastTotalPlayer + " " + " tu as gagné !!! ";
  }

  document.getElementById("carte").disabled = true;
  document.getElementById("reste").disabled = true;
  console.log(lastTotalPc);
  return false;
}

/***********************************************************************Fonction pour reset le jeu*/

/*
Fonction permettant de rafraîchir la page afin de pouvoir rejouer.
Quand on clique sur le bouton rejouer on fait appel à cette fonction.*/

function reset() {}
