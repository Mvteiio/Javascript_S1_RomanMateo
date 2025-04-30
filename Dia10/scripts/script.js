
function asignarImagen() {
    let codeInput = document.getElementById("codigoInput")
    let numeroCode = codeInput.value
    let imagen = document.getElementById("imagen")

    let imageURL = `https://http.cat/${numeroCode}`

    console.log (imageURL)

    imagen.src = imageURL;
    imagen.alt = `HTTP Cat ${numeroCode}`;

}

