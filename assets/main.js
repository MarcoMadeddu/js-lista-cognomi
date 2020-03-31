console.log("java is done");

//chiedere all'utente il cognome

var cognome = prompt("Inserisci il tuo cognome");
var cognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];

//inserire il cognome all'interno dell'array dopo aver fatto un controllo

while(cognome == ''){
  cognome = prompt("Inserisci correttamente");
}

cognomi.push(cognome);
console.log("Ecco la prima versione della lista: " + cognomi);

//stampa l'array in ordine alfabetico

cognomi.sort();
console.log("Ecco la lista ordinata alfabeticamente: " + cognomi);

//mostra la posizione del cognome scelto

var position= (cognomi.indexOf(cognome) +1);
console.log("Il cognome: " + cognome + " è situato alla posizione: " + position);
