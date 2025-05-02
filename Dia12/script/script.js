async function obtenerDatos() {
    let response = await axios.get("https://6814210f225ff1af1627f7de.mockapi.io/api/v1/students/")
    let data = await response.data
    
    console.log(data[0]["name"])

    let cantidad = data.length
    for (let i=0 ; i<cantidad ; i++) {
        alert(
            "Nombre: " + data[i]["name"] + "\n" +
            "Apellido: " + data[i]["lastName"] + "\n" +
            "Numero Telefónico: " + data[i]["phone"] + "\n" 
        )
    }
}
