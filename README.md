# Calgary Construction Permit Map

## Project Description
This project is a web application that visualizes construction permit data in Calgary on an interactive map. Users can specify a date range to filter the data and view construction permits issued within that range.

## Files Included
- **index.html**: Contains the HTML structure of the web page. It includes links to Leaflet CSS and JavaScript libraries, as well as a reference to the `map.js` file which contains the JavaScript code for interacting with the map.
- **map.js**: Contains the JavaScript code for setting up the Leaflet map, fetching data from the Calgary Open Data Portal API based on user input, and displaying markers on the map with popup information for each construction permit.

## Additional Information
- **Leaflet**: Leaflet is used for creating the interactive map.
- **Leaflet.markercluster**: This plugin is used for clustering markers on the map to improve performance when dealing with a large number of markers.
- **OverlappingMarkerSpiderfier**: This plugin is used to handle overlapping markers on the map and ensure they are clickable.
- **Data Source**: Construction permit data is fetched from the Calgary Open Data Portal API (`https://data.calgary.ca/resource/c2es-76ed.json`).
- **Date Range Filter**: Users can specify a start and end date to filter the construction permits displayed on the map.
- **Popup Information**: Each marker on the map displays information about the construction permit, including issued date, work class group, contractor name, community name, and original address.


## How to Run
To run the web application, simply open the `index.html` file in a web browser. Make sure you have an internet connection, as the map data is fetched dynamically from the Calgary Open Data Portal API.
