const table = document.getElementById("market");

function consoleObj() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      var items = JSON.parse(this.responseText);

      var data = "";
      console.log(items);

      for (var i in items) {
        data +=
          "<tr>" +
          "<td>" +
          '<div class="flex">' +
          "<img " +
          'src="' +
          items[i].image +
          '"/>' +
          "<div>" +
          "<h4>" +
          items[i].symbol.toUpperCase() +
          "</h4>" +
          "<h5>" +
          items[i].name +
          "</h5>" +
          "</div>" +
          "</div>" +
          "</td>" +
          "<td> $ " +
          items[i].current_price +
          "</td>" +
          "<td>" +
          items[i].price_change_24h.toFixed(3) +
          "</tr>";
      }

      market.insertAdjacentHTML("beforeend", data);
    }
  };

  xhr.send();
}

consoleObj();
