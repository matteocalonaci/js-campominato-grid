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


// let griglia = document.getElementById("griglia")

//onde evitare di di gestire 100 quadrati in HTML, procediamo creando un ciclo FOR
//che va a stamparmi ad ogni giro di ciclo un quadrato <=100.

// for (i = 1; i <= 100; i++) {

// *vado a creare una classe div equivalente ai quadrati in HTML e la salvo in una variabile.

// **  aggiungo a quadrato la class di CSS.

// *** inserisco un numero progressivo a quadrato

//(MILESTONE #4) creo una nuova varibile che mi vada a richiamare la funzione creaQuadrato

// let elemento = creaQuadrato(i);


//adesso aggiungo quadrato alla griglia
// griglia.append(elemento);
// }

// let button = document.querySelector("btn")

// button.addEventListener("click", (){


// })

//fuori dal ciclo vado a creare una funzione
// cos'è una cosa che ripetiamo nel ciclo FOR? --> il creare quadrato
// prendiamo quindi la formala e la inseriamo in nella funzione.
// che poi andremo a richiamare all'interno del ciclo.

function creaQuadrato(contenuto) {
    // *
    let quadrato = document.createElement("div");

    // ** 
    quadrato.classList.add("quadrato");

    // ***
    quadrato.innerText = contenuto;

    // **** (MILESTONE #3) adesso vado ad aggiungere ad ogni quadrato un evento clic 
    quadrato.addEventListener("click", function () {
        console.log("selezionato", contenuto)
        //aggiungo la classe eveidenziata  per i quadrati che vado a cliccare
        quadrato.classList.toggle("evidenziato")


        //uso toggle e non add perchè toggle mi permette in automatico di aggiungere la classe dove non c'è e toglierla dove c'è al solo click

        // avrei potuto usare anche il this = elemento che ha ricevuto il click anche nel caso non avessimo la variabile di riferimento come in questo caso

        // ----> this.classList.add("evidenziato")

    })

    // restituisco il quadrato al chiamante della funzione
    return quadrato

}

//BONUS 2
let button = document.getElementById("btn")
button.addEventListener("click", function () {
    griglia.innerHTML = ""

    for (i = 1; i <= 100; i++) {

        // *vado a creare una classe div equivalente ai quadrati in HTML e la salvo in una variabile.

        // **  aggiungo a quadrato la class di CSS.

        // *** inserisco un numero progressivo a quadrato

        //(MILESTONE #4) creo una nuova varibile che mi vada a richiamare la funzione creaQuadrato
        let elemento = creaQuadrato(i);


        //adesso aggiungo quadrato alla griglia
        griglia.append(elemento);

    }
})






