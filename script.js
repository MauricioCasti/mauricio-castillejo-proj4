var map;
// Global Variables
var sequoia;
var jerome;
var artanddesign;
var citrus;
var collegeEDU;

// Counter for clicks
var click = 1;

// answers correct counter
var correct = 0;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.241099, lng: -118.529041 },
    zoom: 16.75,
    disableDoubleClickZoom: true,
    zoomControl: false,
    mapTypeControl: false,
    draggable: false,
    keyboardShortcuts: false,
    streetViewControl: false,
    
    //Used to find the styles affecting the map and modifying it to only show roads and their names, and the geometry of the buildings
    // https://stackoverflow.com/questions/47578012/google-maps-api-removing-all-map-labels-with-exceptions
    styles: [{
        "featureType": "poi",
        "elementtype": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType":"labels",
            "stylers": [{
            "visibility": "off"
        }]
    },]
    });
    map.addListener("dblclick",function(e) {checkClick(e.latLng, map);});
}
//this function checks current double click on the map and sets up/display the result of the double click
function checkClick(latLng,map){
    switch (click){
        case 1:
            var seqBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.23997229846683,-118.52852962202076),
                new google.maps.LatLng(34.240937117635276,-118.5274218696976),
                
            );
            // create rectangle
            sequoia = shapeSetup(map, seqBounds);
            // checks if correct
            checkAns(seqBounds, latLng, sequoia);
            click++;
            showScore();//display the current correct inputs from user
            break;
        case 2:
            var jerBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.23862247544264,-118.53099457210544),
                new google.maps.LatLng(34.23913940201214,-118.53006116336826)
            );
            // create rectangle
            jerome = shapeSetup(map, jerBounds);
            // checks if correct
            checkAns(jerBounds, latLng, jerome);
            click++;
            showScore(); //display the current correct inputs from user
            break;
        case 3:
            var artBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.242910897810596, -118.53031811486646),
                new google.maps.LatLng(34.24402011332127,-118.5295408148194)
            );
            // create rectangle
            artanddesign = shapeSetup(map, artBounds);
            // checks if correct
            checkAns(artBounds, latLng, artanddesign);
            click++;
            showScore();//display the current correct inputs from user
            break;
        case 4:
            var citBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.23884726266802,-118.52872542327889),
                new google.maps.LatLng(34.23916005129178,-118.52743662184723)
            );
            // create rectangle
            citrus = shapeSetup(map, citBounds);
            //checks if correct
            checkAns(citBounds,latLng, citrus);
            click++;
            showScore();//display the current correct inputs from user
            break;
        case 5:
            var codBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.241005023193026,-118.53149882740033),
                new google.maps.LatLng(34.241535238990345,-118.53036693519604)
            );
            // create rectangle
            collegeEDU = shapeSetup(map, codBounds);
            // checks if correct
            checkAns(codBounds, latLng, collegeEDU);
            click++;
            showScore();//display the current correct inputs from user
            break;
        default:
            break;
    }
}
//sets up the shape of the current question
function shapeSetup(map, bound){
    var shape = new google.maps.Rectangle({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity: 0.1,
        map: map,
        bounds: bound
    });
    return shape;
}
// Function call checks the answer of the current question
function checkAns(boundary,latLng,bulding){
    if (boundary.contains(latLng)) {
        bulding.setOptions({
            strokeColor: "green",
            fillColor: "green"    
        });
        correct++;
        document.getElementById("input" + click).setAttribute("style", "color:#23cf00");
        document.getElementById("input" + click).innerHTML = " Correct";
    }
    else { // if wrong, highlight red
        bulding.setOptions({
            strokeColor: "red",
            fillColor: "red"
        });
        document.getElementById("input" + click).setAttribute("style", "color: #cf0000");
        document.getElementById("input" + click).innerHTML = " Incorrect";
    }
}
function showScore(){
    document.getElementById("numCorrect").innerHTML = correct;
}
 