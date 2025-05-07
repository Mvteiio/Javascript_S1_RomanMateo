function agregarTrajePanel () {
    let panelTrajes = document.getElementById("fitRegister");
    panelTrajes.style.display = "flex";
}

async function agregarHeroe() {
    let heroNameT = document.getElementById("heroName").value
    let actorNameT = document.getElementById("actorName").value
    let actorAgeT = document.getElementById("actorAge").value
    let ubicationT = document.getElementById("ubication").value
    let posterT = document.getElementById("poster").value
    let dateT = document.getElementById("date").value
    let selectT = document.getElementById("comic");
    let valorSeleccionadoT = selectT.value;

    let trajeInputs = document.querySelectorAll("#agregadosTrajes .inputFit");
    let suitsT = [];

    trajeInputs.forEach(input => {
        if (input.value.trim() !== "") {
        suitsT.push(input.value.trim());
        }
    });

    await fetch(`https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/heroes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            heroName: heroNameT,
            actorName: actorNameT,
            actorAge: actorAgeT,
            ubication: ubicationT,
            poster: posterT,
            date: dateT,
            producer: valorSeleccionadoT,
            suits: suitsT
        })
        
    });

    // reiniciar todos los campos
    document.getElementById("heroName").value = "";
    document.getElementById("actorName").value = "";
    document.getElementById("actorAge").value = "";
    document.getElementById("ubication").value = "";
    document.getElementById("poster").value = "";
    document.getElementById("date").value = "";
    document.getElementById("comic").selectedIndex = 0;

    // borrar los trajes agregados y ocultar panel
    document.getElementById("agregadosTrajes").innerHTML = "";
    document.getElementById("fitRegister").style.display = "none";

    alert("El personaje se ha guardado correctamente.");
}

function nombreTraje (){
    let agregarTraje = document.getElementById("botonAgregar")
    let template = document.getElementById("template")
    let nuevosTrajes = document.getElementById("agregadosTrajes")

    agregarTraje.addEventListener("click", () => {
        let nuevoTraje = template.cloneNode(true)
        nuevoTraje.style.display="flex";

        let botonCancelar = nuevoTraje.querySelector("#deleteFit");
        botonCancelar.addEventListener("click", () => {
            nuevosTrajes.removeChild(nuevoTraje);
        });

        nuevosTrajes.appendChild(nuevoTraje)
    })

}

nombreTraje();

function cancelar(){
    // reiniciar todos los campos
    document.getElementById("heroName").value = "";
    document.getElementById("actorName").value = "";
    document.getElementById("actorAge").value = "";
    document.getElementById("ubication").value = "";
    document.getElementById("poster").value = "";
    document.getElementById("date").value = "";
    document.getElementById("comic").selectedIndex = 0;

    // borrar los trajes agregados y ocultar panel
    document.getElementById("agregadosTrajes").innerHTML = "";
    document.getElementById("fitRegister").style.display = "none";
}