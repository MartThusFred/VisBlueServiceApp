//const Data_API = "https://testserviceapptest.azurewebsites.net/data_update";
//const DeviceList_API = "https://testserviceapptest.azurewebsites.net/devices";
const Data_API = "http://localhost:3000/data_update";
const DeviceList_API = "http://localhost:3000/devices";

var dataList = [];
var setup = [];
var old1 = "VRFB_E3T2.1H1S0.1C1I1_02015";
var old2 = "VRFB_test1_02014";

getDevices()
    .then(setUpSite);

function setUpSite(data) {
    setup = data;
    setup.forEach(element => {
        if (element.Title == old1 || element.Title == old2) {
            // nothing 
        } else {
        var div = document.createElement('div');
        div.setAttribute('id', 'datarow')
        div.innerHTML += `
        <p> Batteri (${element.Title}): </p>
        <div id="visteData">
            <p>Alarm1 = <p id="${element.Title}-A1"> </p></p>
            <p>Alarm2 = <p id="${element.Title}-A2"> </p></p>
        </div>
        ` 
        document.getElementById("data").appendChild(div);
        }
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
        document.getElementById(dataElement.ConnectionDeviceId + "-A1").innerHTML = dataElement.Alarm1;
        document.getElementById(dataElement.ConnectionDeviceId + "-A1").style.height = "2ch";
        document.getElementById(dataElement.ConnectionDeviceId + "-A1").style.width = "5ch";
        document.getElementById(dataElement.ConnectionDeviceId + "-A2").innerHTML = dataElement.Alarm2;
        document.getElementById(dataElement.ConnectionDeviceId + "-A2").style.height = "2ch";
        document.getElementById(dataElement.ConnectionDeviceId + "-A2").style.width = "5ch";
        if(dataElement.Alarm1 > 0) {
            document.getElementById(dataElement.ConnectionDeviceId + "-A1").style.backgroundColor = "red";
        } else {
            document.getElementById(dataElement.ConnectionDeviceId + "-A1").style.backgroundColor = "green";
        }
        if(dataElement.Alarm2 > 0) {
            document.getElementById(dataElement.ConnectionDeviceId + "-A2").style.backgroundColor = "red";
        } else {
            document.getElementById(dataElement.ConnectionDeviceId + "-A2").style.backgroundColor = "green";
        }
    });
}

