const API_URL = "http://localhost:3000/data_update"

var dataList = [];
var setup = [];

getData()
    .then(setUpSite);

setInterval(() => {
    getData()
    .then(DisplayData);
}, 2000);


function getData() {
    return fetch(API_URL)
    .then(res => res.json());
}

function DisplayData(data) {
    dataList = data;
    dataList.forEach(data => {
        document.getElementById(data.ConnectionDeviceId).innerHTML += data.GridPower;
    });
}

function setUpSite(dataForSetup) {
    dataForSetup.forEach(dataElement => {
        var nameDiv = document.createElement('div');
        nameDiv.setAttribute('id', 'nameDiv');
        document.getElementById('nameDiv').innerHTML = `
        <p>GridPower for Battery(${dataElement.ConnectionDeviceId}) = <p id="${dataElement.ConnectionDeviceId}"></p></p>
        `;
        document.getElementById("data").appendChild(nameDiv);
    });
}
