	
//////////////////Popup Contents///////////////////
var PMTC =
  '<p><h1>Bay Area (MTC)</h1></p>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   7,000 sq mi</p>' +
  '<p><b>Population</b>   7.68 million</p>' +
  '<p><b>Number of Warehouses</b>   738</p>' +
  '<p><b>Major Mode</b>   Truck 72%</p>' +
  '<h2>Data Sources</h2>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/census/"><b>Truck AADT</b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/wim/datawim.html"><b>Weigh-In-Motion (WIM) Data</b>' +
  '<p><a href="https://www.arb.ca.gov/msei/categories.htm"><b>Mobile Source Emissions Inventory</b>' +
  '<h2>Studies</h2>' +
  '<p><a href="https://mtc.ca.gov/our-work/plans-projects/economic-vitality/san-francisco-bay-area-goods-movement-plan"><b>Bay Area Goods Movement Plan </b></p>' +
  '<p><a href="http://www.dot.ca.gov/hq/tpp/offices/ogm/regional_level/FR3_SFBAFMS_Final_Report.pdf"><b>San Francisco Bay Area Freight Mobility Study </b></p>' +
  '<p><a href="http://www.planningfor.jobs/research"><b>Industrial Land and Jobs Study</b>' +
   '</div>';

var PSA =
  '<h1>Sacramento Area Council of Governments</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><p><b>Area</b>   6558 sq mi</p>' +
  '<p><b>Population</b>   2.45 million</p>' +
  '<p><b>Number of Warehouses</b>   248</p>' +
  '<p><b>Major Mode</b>   Truck 68%</p>' +
  '<h2>Data Sources</h2>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/census/"><b>Truck AADT</b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/wim/datawim.html"><b>Weigh-In-Motion (WIM) Data</b>' +
  '<p><a href="https://www.arb.ca.gov/msei/categories.htm"><b>Mobile Source Emissions Inventory</b>' +
  '<h2>Studies</h2>' +
  '<p><a href="https://www.sacog.org/regional-goods-movement-study"><b>SACOG Regional Goods Movement Study</b>' +
  '</div>';

var PSJ =
  '<h1>San Joaquin Council of Governments</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   1426 sq mi</p>' +
  '<p><b>Population</b>   0.73 million</p>' +
  '<p><b>Number of Warehouses</b>   116</p>' +
  '<p><b>Major Mode</b>   Truck 92%</p>' +
  '<h2>Data Sources</h2>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/census/"><b>Truck AADT</b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/wim/datawim.html"><b>Weigh-In-Motion (WIM) Data</b>' +
  '<p><a href="https://www.arb.ca.gov/msei/categories.htm"><b>Mobile Source Emissions Inventory</b>' +
  '<h2>Studies</h2>' +
  '<p><a href="http://sjvcogs.org/valleywide_activities/good-movement/"><b>San Joaquin Valley Goods Movement Plan</b></p>' +
  '</div>';

var PAM =
  '<h1>Alameda County</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   821 sq mi</p>' +
  '<p><b>Population</b>   1.5 million</p>' +
  '<p><b>Freight Flow</b>   144 millions of tons</p>' +
  '<p><b>Major Mode</b>   Truck 81%</p>' +
  '<h2>Data Sources</h2>' +  
  '<p><a href="http://www.dot.ca.gov/trafficops/census/"><b>Truck AADT</b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/wim/datawim.html"><b>Weigh-In-Motion (WIM) Data</b>' +
  '<p><a href="https://www.arb.ca.gov/msei/categories.htm"><b>Mobile Source Emissions Inventory</b>' +
  '<h2>Studies</h2>' +
  '<p><a href="https://www.alamedactc.org/app_pages/view/13783"><b>Alameda County Goods Movement Plan</b></p>' +
  '</div>';
  
var PCA =
  '<h1>California State</h1>' +
  '<div class="Pop"><h2>Key Facts</h2>' +
  '<p><b>Area</b>   163,696 sq mi</p>' +
  '<p><b>Population</b>   39.25 million</p>' +
  '<p><b>Freight Flow</b>   1,442 millions of tons</p>' +
  '<h2>Data Sources</h2>' +  
  '<p><a href="http://faf.ornl.gov/fafweb/"><b>FAF4 Database </b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/census/"><b>Truck AADT</b>' +
  '<p><a href="http://www.dot.ca.gov/trafficops/wim/datawim.html"><b>Weigh-In-Motion (WIM) Data</b>' +
  '<p><a href="https://www.arb.ca.gov/msei/categories.htm"><b>Mobile Source Emissions Inventory</b>' +
  '<h2>Studies</h2>' +
  '<p><a href="http://www.dot.ca.gov/californiarail/"><b>California State Rail Plan </b>' +
  '<p><a href="http://www.dot.ca.gov/hq/tpp/offices/ogm/california_freight_mobility_plan.html"><b>California Freight Mobility Plan</b></p>' +
  '<p><a href="http://www.casustainablefreight.org/theplan.html"><b>California Sustainable Freight Action Plan</b></p>' +
  '</div>';

var PNO =
  '<p>No data available. Please check other layers. </p>' +
  '<p>Please contact the team via siqingyi@berkeley.edu if you know any relevant data source. </p>' 
  '12/2017' +
  '</div>';

//////////////////Layers-MPO///////////////////
var MPO = L.layerGroup();

var Mstyle = {
  "color": "#ff7800",
  "weight": 4,
  "opacity": 0.65
};

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/c446b40279f5563b983eaa4840750992/raw/e415dbd6c263c5f2aea729c49cf8e540fbf754fb/MTC.json',
  dataType: 'json',
  success: function(response) {
    geojsonMPOMTC = L.geoJson(response, {
        style: Mstyle
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
        style: Mstyle
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
        style: Mstyle
      })
      .addTo(MPO)
      .bindPopup(PSJ);
  }
});

//////////////////Layers-County///////////////////
var County = L.layerGroup();

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/dc4b464b9d706176c169b4bed5bb0def/raw/5638b8238893bd9c3ce86096c69007816b95caa5/CountyEL.json',
  dataType: 'json',
  success: function(response) {
    geojsonCounty = L.geoJson(response).addTo(County).bindPopup(PNO);
    map.fitBounds(geojsonCounty.getBounds());
  }
});

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/8926f137c93c02615ae6ff9613d2ced8/raw/4d85f811a5dbeec28f6c7790b5052331642f79f6/AM.json',
  dataType: 'json',
  success: function(response) {
    geojsonCountyAM = L.geoJson(response).addTo(County).bindPopup(PAM);
  }
});


var District = L.layerGroup();


var Dstyle = {
  "color": "#FE2E9A",
  "weight": 4,
  "opacity": 0.65
};

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/acfb233df91631ca3e59ba5fee0eac93/raw/4529e48a846579f90bc9e63a038301b335519cf4/District.json',
  dataType: 'json',
  success: function(response) {
    geojsonDistrict = L.geoJson(response, {
      style: Dstyle
    }).addTo(District);
    map.fitBounds(geojsonDistrict.getBounds());
  }
});

var CSA = L.layerGroup();

var CSAstyle = {
  "color": "#04B404",
  "weight": 4,
  "opacity": 0.65
};

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/f62079365ca022844d8d89ff71e58726/raw/c610f3736b7a5d3d46194ef75ef388d0ac6f0550/CSA.json',
  dataType: 'json',
  success: function(response) {
    geojsonCSA = L.geoJson(response, {
      style: CSAstyle
    }).addTo(CSA);
    map.fitBounds(geojsonCSA.getBounds());
  }
});

var State = L.layerGroup();
var Sstyle = {
  "color": "#FF0000",
  "weight": 4,
  "opacity": 0.65
};

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/ec10b535531c4d1cecf48e6ea05b6675/raw/6d68b1822c936fdb9e4f900eec1bf6a233d7f120/CA.json',
  dataType: 'json',
  success: function(response) {
    geojsonState = L.geoJson(response, {
      style: Sstyle
    }).addTo(State).bindPopup(PCA);
    map.fitBounds(geojsonState.getBounds());
  }
});


var Air = L.layerGroup();

var Astyle = {
  "color": "#00BFFF",
  "weight": 4,
  "opacity": 0.65,
  "lineWidth": 1
};

$.ajax({
  type: "GET",
  url: 'https://gist.githubusercontent.com/siqingyi/6d0220424a840b432ceebe2d3b24a7b3/raw/4d94e472f4f8170b688bf56a1de9cda0c3198e26/air.json',
  dataType: 'json',
  success: function(response) {
    geojsonAir = L.geoJson(response, {
      style: Astyle
    }).addTo(Air).bindPopup(PNO);
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
  zoom: 8,
  layers: [grayscale, MPO]
});

var baseLayers = {
  "Grayscale": grayscale,
  "Streets": streets
};

var overlays = {
  "MPO": MPO,
  "County": County,
  "Caltrans District": District,
  "Combined Statistical Area": CSA,
  "Air District":Air,
  "State": State
};

L.control.layers(baseLayers, overlays).addTo(map);	
	
	
