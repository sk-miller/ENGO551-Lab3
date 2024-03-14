// Initialize the map
let map = L.map('map').setView([51.0447, -114.0719], 13);

// Add a base map layer
let baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11', // or any other style you prefer
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2stbWlsbGVyIiwiYSI6ImNsdG0zb215NzFrYTEybG80bWcybmRzcjUifQ.q4-a3Zg4fNWMx0nM5tmUzQ'
}).addTo(map);

// Add your custom layer
let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'sk-miller/cltm420bt00sj01r5gn5t498c',
    accessToken: 'pk.eyJ1Ijoic2stbWlsbGVyIiwiYSI6ImNsdG0zb215NzFrYTEybG80bWcybmRzcjUifQ.q4-a3Zg4fNWMx0nM5tmUzQ'
});

// Function to toggle the custom layer on and off
document.getElementById('toggleLayer').addEventListener('change', function() {
    if (this.checked) {
        tileLayer.addTo(map);
    } else {
        map.removeLayer(tileLayer);
    }
});

let markers = L.markerClusterGroup();
map.addLayer(markers);

let oms = new OverlappingMarkerSpiderfier(map);

function fetchData() {
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let url = `https://data.calgary.ca/resource/c2es-76ed.json?$where=issueddate > '${startDate}' and issueddate < '${endDate}'&$select=issueddate,workclassgroup,contractorname,communityname,originaladdress,latitude,longitude`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            markers.clearLayers();

            // Assuming data is an array directly (no 'features' property)
            data.forEach(feature => {
                let marker = L.marker([feature.latitude, feature.longitude]);
                marker.bindPopup(`
                    <b>Issued Date:</b> ${feature.issueddate}<br>
                    <b>Work Class Group:</b> ${feature.workclassgroup}<br>
                    <b>Contractor Name:</b> ${feature.contractorname}<br>
                    <b>Community Name:</b> ${feature.communityname}<br>
                    <b>Original Address:</b> ${feature.originaladdress}
                `);
                oms.addMarker(marker);
                markers.addLayer(marker);
            });

            // Assuming your markers need to be added to the map
            map.addLayer(markers);
        })
        .catch(e => {
            console.log('There was a problem with your fetch operation: ' + e.message);
        });
}


