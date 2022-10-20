// Étant donné que :
// <div>
//   <span id="childSpan">foo bar</span>
// </div>

// Crée un nœud d'élément vide
// sans ID, sans attributs et sans contenu
var sp1 = document.createElement("span");

// Donne un attribut id appelé "newSpan"
sp1.id = "newSpan";

// Crée du contenu pour le nouvel élément
var sp1_content = document.createTextNode("nouvel élément span de remplacement.");

// Applique ce contenu au nouvel élément
sp1.appendChild(sp1_content);

// Construit une référence au nœud existant à remplacer
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Remplacer le noeud existant sp2 par le nouvel élément span sp1
parentDiv.replaceChild(sp1, sp2);

// Résultat :
// <div>
//   <span id="newSpan">nouvel élément span de remplacement.</span>
// </div>


/* exemple removed */


var tops = document.getElementById("top");
var nested = document.getElementById("nested");

var garbage = tops.removeChild(nested); // Ce premier appel supprime correctement le noeud