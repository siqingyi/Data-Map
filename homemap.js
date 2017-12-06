//////////////////Popup Contents///////////////////
var PMTC =
  '<p><h1>San Francisco Bay Area (MTC)</h1></p>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   7,000 sq mi</p>' +
  '<p><b>Population</b>   7.68 million</p>' +
  '<p><b>Number of Warehouses</b>   738</p>' +
  '<p><b>Major Mode</b>   Truck 72%</p>' +
  '</div>';


var PSA =
  '<h1>Sacramento Area Council of Governments</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><p><b>Area</b>   6558 sq mi</p>' +
  '<p><b>Population</b>   2.45 million</p>' +
  '<p><b>Number of Warehouses</b>   248</p>' +
  '<p><b>Major Mode</b>   Truck 68%</p>' +
  '</div>';

var PSJ =
  '<h1>San Joaquin Council of Governments</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   1426 sq mi</p>' +
  '<p><b>Population</b>   0.73 million</p>' +
  '<p><b>Number of Warehouses</b>   116</p>' +
  '<p><b>Major Mode</b>   Truck 92%</p>' +
  '</div>';



//////////////////Layers-MPO///////////////////



var MPO = L.layerGroup();

var MTCstyle = {
  "color": "#fdb515",
  "weight": 4,
  "opacity": 0.65
};

var SAstyle = {
  "color": "#003262",
  "weight": 4,
  "opacity": 0.65
};

var SJstyle = {
  "color": "#aaaaaa",
  "weight": 4,
  "opacity": 0.65
};



$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/c446b40279f5563b983eaa4840750992/raw/e415dbd6c263c5f2aea729c49cf8e540fbf754fb/MTC.json',
  dataType: 'json',
  success: function(response) {
    geojsonMPOMTC = L.geoJson(response, {
        style: MTCstyle
      })
      .addTo(MPO)
      .bindPopup(PMTC);
  }
});

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/637ee2ff9da387fc92174efc05da5512/raw/dd41eb3297203cc53af277c9d19cc6da565e9535/SA.json',
  dataType: 'json',
  success: function(response) {
    geojsonMPOSA = L.geoJson(response, {
        style: SAstyle
      })
      .addTo(MPO)
      .bindPopup(PSA);
  }
});

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/99d624d1e2e77f908c9011ac6336f497/raw/d2e52060a6a5710e1356ff620b9c377d4e123693/SJ.json',
  dataType: 'json',
  success: function(response) {
    geojsonMPOSJ = L.geoJson(response, {
        style: SJstyle
      })
      .addTo(MPO)
      .bindPopup(PSJ);
  }
});


$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/163b7ad07862c0730c9e5bfafbe35905/raw/fb91370bcceb60a08dea9af3d02e69f9d0ed17dc/MPO.json',
  dataType: 'json',
  success: function(response) {
    geojsonMPO = L.geoJson(response, {
        style: Mstyle
      })
      .bindPopup(PMTC);
    map.fitBounds(geojsonMPO.getBounds());
  }
});



//////////////////Map Attributes///////////////////


var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Siqing Yi,' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale = L.tileLayer(mbUrl, {
    id: 'mapbox.light',
    attribution: mbAttr
  }),
  streets = L.tileLayer(mbUrl, {
    id: 'mapbox.streets',
    attribution: mbAttr
  });



var map = L.map('map', {
  center: [37.8988255, -122.0127493],
  zoom: 7,
  layers: [grayscale, MPO]
});


//////////////////Layer Countrol///////////////////

var baseLayers = {
  "Grayscale": grayscale,
  "Streets": streets
};



L.control.layers(baseLayers).addTo(map);
