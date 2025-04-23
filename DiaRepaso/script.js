function fetchPoke() {
    const miInput = document.getElementById('idPokemon');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    
    function buscarPokemon() {
        realizarLlamadaAPI(numeroPokemon);
        miInput.value = numeroPokemon; 
    }
    
    // Evento para el botón Anterior
    if (btnAnterior) {
        btnAnterior.addEventListener('click', function() {
            if (numeroPokemon > 1) { // Evita ir a números negativos
                numeroPokemon--;
                buscarPokemon();
            }
        });
    }
    
    // Evento para el botón Siguiente
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', function() {
            numeroPokemon++;
            buscarPokemon();
        });
    }

    let numeroPokemon = 1;
    
    miInput.addEventListener('input', function() {
        numeroPokemon = this.value.trim().toLowerCase();
        console.log("El valor actual es:", numeroPokemon);
        
        // Solo hacer la llamada API cuando tenemos un número válido
        if (numeroPokemon) {
            realizarLlamadaAPI(numeroPokemon);
        }
    });
}

function realizarLlamadaAPI(id) {
    let xhr = new XMLHttpRequest();
    let link = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log("Llamando a la API con URL:", link);
    
    xhr.open("GET", link);
    
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta["sprites"]["front_default"]);
            mostrarPokemon(respuesta);
        }
    };
    
    xhr.send();
}

// Iniciar la función cuando se carga la página
fetchPoke();

function mostrarPokemon(data){
    let gifPokemon = document.getElementById('gifPokemon');
    let nombrePokemon = document.getElementById('nombrePokemon');
    let ruta = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    gifPokemon.src=`
        ${ruta}
    `

    nombrePokemon.textContent = `
        ${data.id}- ${data.name}
    `

}