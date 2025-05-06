async function llamadaAPI (){
    let response = await fetch("https://6814210f225ff1af1627f7de.mockapi.io/api/v1/tareas/")
    let data = await response.json()

    ponerUsuarios(data);
}

function ponerUsuarios(data) {
    let template = document.getElementById("tarea");
    let nuevasTareas = document.getElementById("nuevasTareas");

    // Limpiar el contenedor cada vez que se inicie la funcion 
    nuevasTareas.innerHTML = '';

    data.forEach(tarea => {
        if (tarea["status"] === "On hold") {
            const nuevaTarea = template.cloneNode(true);
            nuevaTarea.style.display = "flex";
            nuevaTarea.querySelector("#nombreTarea").textContent = tarea["task"];

            nuevaTarea.querySelector("#chulito").setAttribute("data-id", tarea["id"]);
            nuevaTarea.querySelector("#chulito").addEventListener("click", realizado);

            nuevaTarea.querySelector("#eliminar").setAttribute("data-id", tarea["id"]);
            nuevaTarea.querySelector("#eliminar").addEventListener("click", eliminar);

            nuevasTareas.appendChild(nuevaTarea);
            
        

        } 
        else if (tarea["status"] === "ready") {
            const nuevaTarea = template.cloneNode(true);
            nuevaTarea.style.display = "flex";

            const nombreTarea = nuevaTarea.querySelector("#nombreTarea");
            
            nombreTarea.style.textDecoration = "line-through";
            nombreTarea.style.opacity = "0.5";

            nuevaTarea.querySelector("#nombreTarea").   textContent = tarea["task"];

            nuevaTarea.querySelector("#chulito").setAttribute("data-id", tarea["id"]);
            nuevaTarea.querySelector("#chulito").addEventListener("click", realizado);

            nuevaTarea.querySelector("#eliminar").setAttribute("data-id", tarea["id"]);
            nuevaTarea.querySelector("#eliminar").addEventListener("click", eliminar);

            nuevasTareas.appendChild(nuevaTarea);
            
            
        }
    });
}

async function realizado(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);
    await fetch(`https://6814210f225ff1af1627f7de.mockapi.io/api/v1/tareas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "ready"
        })
    });
    llamadaAPI();
}

async function eliminar(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);
    await fetch(`https://6814210f225ff1af1627f7de.mockapi.io/api/v1/tareas/${id}`, {
        method: "DELETE",
    });
    llamadaAPI();
}

async function addTask(){
    let task = document.getElementById("text")
    let valorTexto = task.value

    await fetch(`https://6814210f225ff1af1627f7de.mockapi.io/api/v1/tareas/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: valorTexto,
            status: "On hold"
        })
    });
    llamadaAPI();
}


llamadaAPI();