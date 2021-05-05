const API_URL = "http://hp-api.herokuapp.com/api/characters"
//const API_URL = "http://localhost:3000/api/v1/data"

const dataList = [];

getData()
    .then(DisplayData);

function getData() {
    return fetch(API_URL)
    .then(res => res.json());
}

function DisplayData(data) {
    dataList = data;
    dataList.forEach(data => {
        document.getElementById("data").innerHTML += data.name + "<br>";
    });
}

//DisplayData();
