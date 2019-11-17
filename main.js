// Creating the XMLHttpRequest object conditionally for IE browser compatibility.

var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
console.log("Hello World!")

// Using a proxy for fixing the CORS error.

request.open("GET", "https://cors-anywhere.herokuapp.com/http://www.meteoromania.ro/wp-json/meteoapi/v2/starea-vremii");
request.setRequestHeader("Content-Type", "text/json");
request.send();

//Parsing JSON file and generating HTML content.

request.addEventListener("load", function() {
    if(this.readyState === 4 && this.status === 200) {
    var obj = JSON.parse(this.response);
    var afisaj = document.getElementById("container");
    var afisaj_lista = document.getElementById("list_container");
    var continut = "<select id='lista'><option value=''>Alegeți orașul</option>";
    for(var i = 0; i < 40; i++){
        continut += "<option value='" + i + "'>" + obj.features[i].properties.nume + "</option>";
  
  }
  continut += "</select>";
  afisaj_lista.innerHTML = continut;
  var selectie = document.getElementById("lista");
  selectie.addEventListener("change", function(){
  var vreme = "<p><b>Localitate: </b>" + obj.features[lista.value].properties.nume + "</p>";
  vreme += "<p><b>Actualizat: </b>" + obj.features[lista.value].properties.actualizat + "</p>";
  vreme += "<p><b>Temperatură: </b>" + obj.features[lista.value].properties.tempe + "</p>";
  vreme += "<p><b>Umezeală: </b>" + obj.features[lista.value].properties.umezeala + "</p>";
  vreme += "<p><b>Nebulozitate: </b>" + obj.features[lista.value].properties.nebulozitate + "</p>";
  vreme += "<p><b>Presiune: </b>" + obj.features[lista.value].properties.presiunetext + "</p>";
  vreme += "<p><b>Vânt: </b>" + obj.features[lista.value].properties.vant + "</p>";
  vreme += "<p><b>Fenomene: </b>" + obj.features[lista.value].properties.fenomen_e + "</p>";
  vreme += "<p><b>Zăpadă: </b>" + obj.features[lista.value].properties.zapada + "</p>";
  vreme += "<p><b>Temperatură apă: </b>" + obj.features[lista.value].properties.tempapa + "</p>";
  afisaj.innerHTML = vreme;
  afisaj.style.borderColor = "#000";
  });
  
}
});