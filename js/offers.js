var table = [
  {
    cityOrigin: "Madrid", cityDestination: "Paris", transportMedium: "Avión", price: "150"
  },
  {
    cityOrigin: "Madrid", cityDestination: "Amsterdam", transportMedium: "Avión", price: "300"
  },
  {
    cityOrigin: "Paris", cityDestination: "Amsterdam", transportMedium: "Tren", price: "50"
  },
  {
    cityOrigin: "Paris", cityDestination: "Amsterdam", transportMedium: "Avión", price: "250"
  }
]
window.onload = loadTable;

function loadTable() {
  document.getElementById("show-table").addEventListener("click", showTable, false); /*form page select the element with id "showtable " */
  document.getElementById("new-offer").addEventListener("submit", newOffer, false);
}

function showTable() {
  var bodyTable = document.getElementById("offers-table");
  var fullTable = "";
  
  for (var i = 0; i < table.length; i++) {
    fullTable += `<tr><td>${table[i].cityOrigin}</td><td>${table[i].cityDestination}</td><td>${table[i].transportMedium}</td><td>${table[i].price}</td></tr>`;
  }

  bodyTable.innerHTML = fullTable;

  document.getElementById("table-offers").style.display = "table";
}
function newOffer(e) {
  e.preventDefault();

  var newCityOriginByUser = document.getElementById("city-origin").value;
  var newCityDestinationByUser = document.getElementById("city-destination").value;
  var newTransportMediumByUser = document.getElementById("transport-medium").value;
  var newPriceByUser = document.getElementById("price").value;

  var newOffer = { cityOrigin: newCityOriginByUser, cityDestination: newCityDestinationByUser, transportMedium: newTransportMediumByUser, price: newPriceByUser }

  table.push(newOffer);
  showTable();
}