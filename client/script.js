const Data_API = "https://testserviceapptest.azurewebsites.net/data_update";
const DeviceList_API = "https://testserviceapptest.azurewebsites.net/devices";
//const Data_API = "http://localhost:3000/data_update";
//const DeviceList_API = "http://localhost:3000/devices";

var dataList = [];
var setup = [];

getDevices()
    .then(setUpSite);

function setUpSite(data) {
    setup = data;
    setup.forEach(element => {
        var div = document.createElement('div');
        div.setAttribute('id', 'datarow')
        div.innerHTML += `
        <p> Batteri (${element.Title}): </p>
        <div id="visteData">
            <p>Alarm discharge 1 = <p id="${element.Title}"> </p></p>

        <div id="${element.Title}-status"></div>    
        </div>
        ` 
        //document.getElementById(element.ConnectionDeviceId).style.backgroundColor = "white";
        document.getElementById("data").appendChild(div);
    });
} 

function getDevices() {
    return fetch(DeviceList_API)
    .then(res => res.json());
}

setInterval(() => {
    getData()
        .then(DisplayData);
}, 20 * 1000) // (hvor mange sekunder og så ganger vi millisec på)


function getData() {
    return fetch(Data_API)
    .then(res => res.json());
}

function DisplayData(data) {
    dataList = data;
    dataList.forEach(dataElement => {
        document.getElementById(dataElement.ConnectionDeviceId).innerHTML = dataElement.Alarm1;
        document.getElementById(dataElement.ConnectionDeviceId).style.height = "2ch";
        document.getElementById(dataElement.ConnectionDeviceId).style.width = "5ch";
        if(dataElement.Alarm1 > 0) {
            document.getElementById(dataElement.ConnectionDeviceId).style.backgroundColor = "red";
        } else {
            document.getElementById(dataElement.ConnectionDeviceId).style.backgroundColor = "green";
        }
    });
}

