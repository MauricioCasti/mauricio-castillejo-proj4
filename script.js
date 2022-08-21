
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.242, lng: -118.529 },
    zoom: 17,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    zoomControl: false,
    mapTypeControl: false,
    draggable: false,
    keyboardShortcuts: false,
    streetViewControl: false,
    
    //Used to determine the maptype and then configure its styles
    //https://www.w3resource.com/API/google-maps/google-maps-class-propertes-controls.php
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    
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
}
 
window.initMap = initMap;
 