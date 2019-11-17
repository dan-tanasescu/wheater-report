// Creating the XMLHttpRequest object conditionally for IE browser compatibility.

var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

// Using a proxy for fixing the CORS error.

request.open("GET", "https://cors-anywhere.herokuapp.com/http://www.meteoromania.ro/wp-json/meteoapi/v2/starea-vremii");
request.setRequestHeader("Content-Type", "text/json");
request.send();

//Parsing JSON file and generating HTML content.

request.addEventListener("load", function() {
    if(this.readyState === 4 && this.status === 200) {
    var obj = JSON.parse(this.response);
    var viewer = document.getElementById("container");
    var places_list = document.getElementById("list_container");
    var report = "<select id='list'><option value=''>Alegeți orașul</option>";
    for(var i = 0; i < 40; i++){
        report += "<option value='" + i + "'>" + obj.features[i].properties.nume + "</option>";
  
  }
  report += "</select>";
  places_list.innerHTML = report;
  var selection = document.getElementById("list");
  selection.addEventListener("change", function(){
  var wheater = "<p><b>Localitate: </b>" + obj.features[list.value].properties.nume + "</p>";
  wheater += "<p><b>Actualizat: </b>" + obj.features[list.value].properties.actualizat + "</p>";
  wheater += "<p><b>Temperatură: </b>" + obj.features[list.value].properties.tempe + "</p>";
  wheater += "<p><b>Umezeală: </b>" + obj.features[list.value].properties.umezeala + "</p>";
  wheater += "<p><b>Nebulozitate: </b>" + obj.features[list.value].properties.nebulozitate + "</p>";
  wheater += "<p><b>Presiune: </b>" + obj.features[list.value].properties.presiunetext + "</p>";
  wheater += "<p><b>Vânt: </b>" + obj.features[list.value].properties.vant + "</p>";
  wheater += "<p><b>Fenomene: </b>" + obj.features[list.value].properties.fenomen_e + "</p>";
  wheater += "<p><b>Zăpadă: </b>" + obj.features[list.value].properties.zapada + "</p>";
  wheater += "<p><b>Temperatură apă: </b>" + obj.features[list.value].properties.tempapa + "</p>";
  viewer.innerHTML = wheater;
  viewer.style.borderColor = "#000";
  });
  
}
});