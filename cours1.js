    //get id
    const myAnchor = document.getElementById('my-anchor');
    console.log(myAnchor);

    //getClassName
    const contents = document.getElementsByClassName('content');
    const firstContent = contents[0];
    console.log(firstContent);
    //get tagName
    const articles = document.getElementsByTagName('article');
    const thirdArticle = articles[2];

    //ne renvoie pas une liste des résultats, mais le premier élément qui correspond à la recherche.
    // Pour retourner une liste de résultats qui correspondent à la recherche que vous souhaitez faire il faudra utiliser la fonction  querySelectorAll  ,
    //  qui fonctionne de la même manière
    const elt = document.querySelector("#myId p.article > a");

    // element.children: cette propriété nous retourne la liste des enfants de cet élément;

    // element.parentElement: cette propriété nous retourne l 'élément parent de celui-ci ;

    // element.nextElementSibling / element.previousElementSibling: ces propriétés nous permettent de naviguer vers l 'élément suivant / précédent de même niveau que notre élément.
    const elts = document.getElementById('main');

    console.log(elts.children[0]);