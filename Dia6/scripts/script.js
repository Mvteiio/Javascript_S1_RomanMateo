async function crearMazo() {
    try {
        let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        let data = await response.json();
        console.log("Mazo creado:", data);
        return data.deck_id; // Retorna el ID del mazo
    } catch (error) {
        console.error("Error al crear el mazo:", error);
    }
}

async function dibujarCarta(deckId) {
    try {
        let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
        let data = await response.json();
        console.log("Cartas extraídas:", data["cards"][0]["code"]);
        console.log("Cartas extraídas:", data["cards"][1]["code"]);

        // Cartas   Usuario
        let cartaUno = document.getElementById("cartaUnoImagen");
        let cartaDos = document.getElementById("cartaDosImagen");
        cartaUno.src = data["cards"][0]["image"];
        cartaDos.src = data["cards"][1]["image"];

        valorCartaUno = data["cards"][0]["value"];
        valorCartaDos = data["cards"][1]["value"];

        dibujarCartaDealer(deckId);

    } catch (error) {
        console.error("Error al dibujar cartas:", error);
    }
}

async function dibujarCartaDealer(deckId) {
    try {
        let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
        let data = await response.json();
        console.log("Cartas del dealer");
        console.log("Cartas extraídas:", data["cards"][0]["code"]);
        console.log("Cartas extraídas:", data["cards"][1]["code"]);

        // Cartas   Dealer
        let cartaUnoD = document.getElementById("cartaUnoImagenD");
        let cartaDosD = document.getElementById("cartaDosImagenD");
        cartaUnoD.src = data["cards"][0]["image"];
        cartaDosD.src = data["cards"][1]["image"];

        //valores cartas Dealer
        valorCartaUnoD = data["cards"][0]["value"];
        valorCartaDosD = data["cards"][1]["value"];

        if (valorCartaUnoD === "QUEEN" || valorCartaUnoD === "JACK" || valorCartaUnoD === "KING") {
            valorCartaUnoD = "10"
        } else if (valorCartaUnoD === "ACE"){
            valorCartaUnoD = 11
        }

        if (valorCartaDosD === "QUEEN" || valorCartaDosD === "JACK" || valorCartaDosD === "KING") {
            valorCartaDosD = "10"
        } else if (valorCartaDosD === "ACE"){
            valorCartaDosD = 11 }

        if (valorCartaUno === "QUEEN" || valorCartaUno === "JACK" || valorCartaUno === "KING") {
            valorCartaUno = "10" 
        } else if (valorCartaUno === "ACE"){
            valorCartaUno = prompt("Quieres que el valor de la carta Ace sea de 1 o 11?")
        }

        if (valorCartaDos === "QUEEN" || valorCartaDos === "JACK" || valorCartaDos === "KING") {
            valorCartaDos = "10"
        } else if (valorCartaDos === "ACE"){
            valorCartaDos = prompt("Quieres que el valor de la carta Ace sea de 1 o 11?")
        }

        console.log(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos)

        //compararValores(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos);


    } catch (error) {
        console.error("Error al dibujar cartas:", error);
    }
}

function stand(){
    compararValores(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos);
    let cartaImagenD = document.getElementById("cartaDosImagenD")
    cartaImagenD.style.filter = "blur(0)";
}

async function hit(){
    try {
        let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        let data = await response.json();
        let cartaTresDoc = document.getElementById("cartaOpcional")
        let cartaImagenD = document.getElementById("cartaDosImagenD")
        let cartaTres = data["cards"][0]["code"]
        console.log("tercera carta usuario: " + cartaTres)
        // Animacion de la aparicion de la carta
        cartaTresDoc.src = data["cards"][0]["image"]
        cartaTresDoc.classList.add("show");
        
        valorCartaTres = data["cards"][0]["value"]
        if (valorCartaTres === "QUEEN" || valorCartaTres === "JACK" || valorCartaTres === "KING") {
            valorCartaTres = "10"
        } else if (valorCartaTres === "ACE"){
            valorCartaTres = prompt("Quieres que el valor de la carta Ace sea de 1 o 11?")
        }
        
        cartaImagenD.style.filter = "blur(0)";

        compararValoresHint(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos, valorCartaTres)

    } catch (error) {
        console.error("Error: ", error);
    }
}

function compararValoresHint(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos, valorCartaTres) {
    let textoGanador = document.getElementById("ganadorTexto");

    // Convertir valores a numeros antes de la comparación
    let totalDealer = Number(valorCartaUnoD) + Number(valorCartaDosD);
    let totalJugador = Number(valorCartaUno) + Number(valorCartaDos) + Number(valorCartaTres);

    if (totalJugador <= 21) {
        if (totalJugador > totalDealer) {
            textoGanador.textContent = "¡Has ganado!";
        } else if (totalJugador == totalDealer) {
            textoGanador.textContent = "Han empatado";
        }   else {
            textoGanador.textContent = "El dealer gana.";
        }

        console.log("Total Jugador:", totalJugador);
        console.log("Total Dealer:", totalDealer);
} else {
    textoGanador.textContent = "Te has pasado de 21. Has perdido"
}
}


function compararValores(valorCartaUnoD, valorCartaDosD, valorCartaUno, valorCartaDos) {
    let textoGanador = document.getElementById("ganadorTexto");

    // Convertir valores a numeros antes de la comparación
    let totalDealer = Number(valorCartaUnoD) + Number(valorCartaDosD);
    let totalJugador = Number(valorCartaUno) + Number(valorCartaDos);

    if (totalJugador > totalDealer) {
        textoGanador.textContent = "¡Has ganado!";
    } else if (totalJugador == totalDealer) {
        textoGanador.textContent = "Han empatado";
    }   else {
        textoGanador.textContent = "El dealer gana.";
    }

    console.log("Total Jugador:", totalJugador);
    console.log("Total Dealer:", totalDealer);
}




// Flujo del juego
async function iniciarJuego() {
    deckId = await crearMazo();
    if (deckId) {
        dibujarCarta(deckId);
    }
}

iniciarJuego();