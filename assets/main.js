console.log("java is done");

//chiedere all'utente il cognome

var cognome = prompt("Inserisci il tuo cognome con l'iniziale Maiuscola");
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

console.log(cognome , cognomi);

//inserire il cognome nel''array appena creato

cognomi.push(cognome);

console.log(cognomi);

//ordina alfabeticamente la Lista

cognomi.sort();
console.log(cognomi);

//individua la posizione dell'elemento nell'array

var pos = (cognomi.indexOf(cognome) + 1);
console.log(pos);
