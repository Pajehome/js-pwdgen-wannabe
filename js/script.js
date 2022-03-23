// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let userName = prompt('Il tuo nome?');
console.log(userName);
document.getElementById('nome').innerHTML += ' '+ userName;

let familyName = prompt('Il tuo cognome?');
console.log(familyName);
document.getElementById('cognome').innerHTML += ' '+ familyName;

let favouriteColor = prompt('Il tuo colore preferito?');
console.log(favouriteColor);
document.getElementById('colore').innerHTML += ' '+ favouriteColor;
