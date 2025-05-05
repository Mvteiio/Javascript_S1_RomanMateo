async function llamadaApi() {
    let response = await fetch("https://6814210f225ff1af1627f7de.mockapi.io/api/v1/students")
    let data = await response.json()

    window.usuariosData = data

    ponerUsuarios(data)

    configurarBuscador()
}

function ponerUsuarios(data) {
    let template = document.getElementById("main");
    let nuevosUsuarios = document.getElementById("nuevosUsuarios");

    // Limpiar el contenedor cada vez que se inicie la funcion 
    nuevosUsuarios.innerHTML = '';

    data.forEach(usuario => {
        const nuevoUsuario = template.cloneNode(true);
        nuevoUsuario.style.display = "flex";
        nuevoUsuario.querySelector("#avatar").src = usuario["avatar"];
        nuevoUsuario.querySelector("#nombre").textContent = usuario["name_full"];
        nuevoUsuario.querySelector("#descripcion").textContent = usuario["description"];
        nuevosUsuarios.appendChild(nuevoUsuario);
    });
}


function configurarBuscador() {
    const buscador1 = document.getElementById("buscador");
    

    buscador1.addEventListener('input', function() {
        const buscador = this.value.toLowerCase().trim();
        
        if (buscador === ""){
            ponerUsuarios(window.usuariosData)
        }
        
        // Filtrar usuarios 
        const usuariosFiltrados = window.usuariosData.filter(usuario => 
            usuario.name_full.toLowerCase().includes(buscador) ||
            usuario.description.toLowerCase().includes(buscador)
        );
        
        // resultados filtrados
        ponerUsuarios(usuariosFiltrados);
    });
}



llamadaApi();
