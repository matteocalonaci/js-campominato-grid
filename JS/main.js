// MILESTONE #1
// Create la vostra griglia in HTML e CSS, in maniera grossolana.
// Vi servirà solo per testare le classi, come visto in mattinata con la griglia 3x3.


// MILESTONE #2
// Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.


// MILESTONE #3
// Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.


// MILESTONE #4
// Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.

// _________________________________________________________________________________________________


//vado a recuperarmi la mia griglia in HTML e lo salvo in una variabile
let griglia = document.getElementById("griglia")

//onde evitare di di gestire 100 quadrati in HTML, procediamo creando un ciclo FOR
//che va a stamparmi ad ogni giro di ciclo un quadrato <=100.

for (i = 1; i <= 100; i++) {

    //vado a creare una classe div equivalente ai quadrati in HTML e la salvo in una variabile.
    let quadrato = document.createElement("div");

    // aggiungo a quadrato la class di CSS.
    quadrato.classList.add("quadrato");

    //(MILESTONE #3) adesso vado ad aggiungere ad ogni quadrato un evento clic 
    quadrato.addEventListener("click", function () {
        console.log("cliccato")

    })

    //inserisco un numero progressivo a quadrato
    quadrato.innerText = i;

    //adesso aggiungo quadrato alla griglia
    griglia.append(quadrato);
}




