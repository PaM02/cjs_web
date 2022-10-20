myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
    } else {
        isValid = false;
    }
});
/* 
validation avec regex un texte commançan tpar e et suivit de 3 chiffre */
function isValid(value) {
    return /^e[0-9]{3,}$/.test(value);
}