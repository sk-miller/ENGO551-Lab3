let map = L.map('map').setView([51.0447, -114.0719], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

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


