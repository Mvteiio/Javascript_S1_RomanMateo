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
            nuevasTareas.appendChild(nuevaTarea);
        } 
        else if (tarea["status"] === "ready") {
            const nuevaTarea = template.cloneNode(true);
            nuevaTarea.style.display = "flex";

            const nombreTarea = nuevaTarea.querySelector("#nombreTarea");
            
            nombreTarea.style.textDecoration = "line-through";
            nombreTarea.style.opacity = "0.5";

            nuevaTarea.querySelector("#nombreTarea").textContent = tarea["task"];
            nuevasTareas.appendChild(nuevaTarea);
        }
    });
}

function cambiarStatus (){
    let realizado = document.getElementById("chulito")

}


llamadaAPI();