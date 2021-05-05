const API_URL = "http://hp-api.herokuapp.com/api/characters"
const API_URL = "http://localhost:3000/api/v1/data"

getData()
    .then(showData);

function getData() {
    return fetch(API_URL)
    .then(res => res.json());
}

function showData(data) {
    data.forEach(data => {
        document.getElementById("test").innerHTML += data.name +"<br>";
    });
}