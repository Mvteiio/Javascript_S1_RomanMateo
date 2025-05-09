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

const res = await fetch("https://api.petfinder.com/v2/animals?type=dog", {
    headers: {
    Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();
  console.log(data);
}

fetchAnimales()