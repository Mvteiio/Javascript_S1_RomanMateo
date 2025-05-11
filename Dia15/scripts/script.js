let token = null;
let tokenExpiry = null;

async function getToken() {
    const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "t7u0S9QrZlyTMZQW2hAkyxJYcP2zMQfNmk8mlUHkUmt8nMVIZQ",
    client_secret: "HqOwYMNLkg3s8HQHobARmxP4AGJCpddflyG3KSBV"
    })
});

const data = await res.json();
token = data.access_token;
tokenExpiry = Date.now() + data.expires_in * 1000;
}

async function fetchAnimales() {
    if (!token || Date.now() >= tokenExpiry) {
    await getToken();}

    const res = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
    Authorization: `Bearer ${token}`
    }
});

    const data = await res.json();
    console.log(data);
    renderAnimales(data)
}

function renderAnimales(animales) {
    const template = document.getElementById("template");
    const container = document.getElementById("container-pets");
    container.innerHTML = ""; // limpia antes de insertar
    const animals = animales["animals"]

    animals.slice(0, 9).forEach(animal => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#responseImage").src = animal["photos"]?.[0]?.["medium"] || "default.jpg";
        clone.querySelector("#petName").textContent = animal["name"];
        clone.querySelector("#petClass").textContent = (animal["type"] + " - " + animal["age"])
        clone.querySelector("#petCountry").textContent = animal["contact"]["address"]["country"]
        clone.querySelector("#petDescription").textContent = animal["description"];

        clone.setAttribute("data-id", animal["id"]);

        clone.addEventListener("click", async () => {
        const id = clone.getAttribute("data-id");
        await cargarDetalleAnimal(id);
        mostrarDetalle();
    });

        container.appendChild(clone);
    });
}

async function cargarDetalleAnimal(id) {

    if (!token || Date.now() >= tokenExpiry) {
    await getToken();}

    try {
        const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
});
        const { animal } = await res.json();

        // Imagen con fallback
        document.getElementById("responseImageDetailed").src = animal.photos?.[0]?.medium || "default.jpg";
        document.getElementById("petNameDetailed").textContent = animal.name || "Sin nombre";
        document.getElementById("petClassDetailed").textContent = (animal.type || "Tipo desconocido") + " - " + (animal.age || "Edad desconocida");
        document.getElementById("petTypeDetailed").textContent = animal.breeds?.primary || "Desconocido";
        document.getElementById("petCountryDetailed").textContent = animal.contact?.address?.country || "Desconocido";
        document.getElementById("petContactDetailed").textContent = "Contacto: " + (animal.contact?.email || "No disponible");
        document.getElementById("descriptionDetailed").textContent = animal.description || "Sin descripción";

    } catch (error) {
        console.error("Error al cargar detalles del animal:", error);
    }
}

function mostrarDetalle() {
    document.getElementById("infoDetallada").classList.add("active");

    document.getElementById("infoDetallada").addEventListener("click", () => {
    document.getElementById("infoDetallada").classList.remove("active");
})
}


fetchAnimales()