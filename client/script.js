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

        <div id="${element.ConnectionDeviceId}-status"></div>    
        </div>
        ` 
        
        //document.getElementById(element.ConnectionDeviceId).style.backgroundColor = "white";
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
        document.getElementById(dataElement.ConnectionDeviceId).style.height = "2ch";
        document.getElementById(dataElement.ConnectionDeviceId).style.width = "5ch";
        if(dataElement.GridPower > 0) {
            document.getElementById(dataElement.ConnectionDeviceId).style.backgroundColor = "green";
        } else {
            document.getElementById(dataElement.ConnectionDeviceId).style.backgroundColor = "red";
        }
    });
}


