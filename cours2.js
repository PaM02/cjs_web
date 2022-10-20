//changer le contenu de l'id main
let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li></ul>";

//lui il remplace element dont l'id est main et mettre dedans un text
elt.textContent = "text";

/* modfier des classes */

//cretation d'un nouveau element div
const div = document.createElement('div');
div.className = 'foo';

// notre point de départ: <div class="foo"></div>
console.log(div.outerHTML);

// utiliser l'API classList pour supprimer et ajouter des classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// remplacer la classe "foo" par la classe "bar"
div.classList.replace("anotherclass", "bar");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

const div2 = document.createElement('div');
// si "visible" est défini, le supprimer, sinon, l'ajouter
div2.classList.toggle("visible");
console.log(div2.outerHTML);

// ajouter/supprimer "visible", en fonction d'un test conditionnel, pour i inférieur à 10
const div3 = document.createElement('div');
let i = 20;
div3.classList.toggle("visible", i < 10);
//la methode constains retourne un booleen si la classe existe elle retourne true sinon false
console.log(div3.classList.contains("visible"));

// ajouter ou supprimer plusieurs classes
/* div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz"); */

// ajouter ou supprimer plusieurs classes en utilisant la syntaxe de propagation
/* const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls); */

elt.classList.add("nouvelleClasse"); // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse"); // Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément

/* changer les styles d'un element */
elt.style.color = "#fff"; // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

/* modifer les attributs */
elt.setAttribute("type", "password"); // Change le type de l'input en un type password
elt.setAttribute("name", "my-password"); // Change le nom de l'input en my-password
elt.getAttribute("name"); // Retourne my-password

/* creer un nouveau element */

const newElt = document.createElement("div");

/* ajouter des elements */

//recupere l'id de l'element mains
let eltMn = document.getElementById("mains");
//eltMn est pere de div
eltMn.appendChild(newElt);

//creer un element p
const elP = document.createElement("p");

//creer un text
var newContent = document.createTextNode('Hi there and greetings!');

// ajoute le nœud texte au nouveau div créé à p
elP.appendChild(newContent);

//ajouter p dans div
newElt.appendChild(elP);

/* supprimer ou remplacer */
// parentNode.removeChild( < element > )
// parentNode.replaceChild(<newElement>, <oldElement>)

const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);

elt.removeChild(newElt); // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt); // Remplace l'élément newElt par un nouvel élément de type article