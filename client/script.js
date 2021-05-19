const API_URL = "http://localhost:3000/data_update"

var dataList = [];
var setup = [];

getData()
    .then(setUpSite);

function setUpSite(data) {
    setup = data;
    setup.forEach(element => {
        var div = document.createElement('div');
        div.setAttribute('id', 'datarow')
        div.innerHTML += `
        <p> Batteri (${element.ConnectionDeviceId}): </p>
        <div id="visteData">
            <p>GridPower = <p id="${element.ConnectionDeviceId}"> </p></p>
        </div>
        ` 
        document.getElementById("data").appendChild(div);
    });
} 

setInterval(() => {
    getData()
        .then(DisplayData);
}, 2000)


function getData() {
    return fetch(API_URL)
    .then(res => res.json());
}

function DisplayData(data) {
    dataList = data;
    dataList.forEach(dataElement => {
        document.getElementById(dataElement.ConnectionDeviceId).innerHTML = dataElement.GridPower;
    });
}


