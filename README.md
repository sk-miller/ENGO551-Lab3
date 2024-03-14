Updated Readme file:

# Calgary Construction Permit Map

## Project Description

This project is a web application that visualizes construction permit data in Calgary on an interactive map. Users can specify a date range to filter the data and view construction permits issued within that range. Additionally, users can toggle on/off a map layer showing traffic incidents data.

## Files Included

- `index.html`: Contains the HTML structure of the web page. It includes links to Leaflet CSS and JavaScript libraries, as well as references to the map.js file and Mapbox styles for interacting with the map and displaying traffic incidents data.
- `map.js`: Contains the JavaScript code for setting up the Leaflet map, fetching construction permit data from the Calgary Open Data Portal API, and displaying markers on the map with popup information for each permit. It also includes functionality for toggling the traffic incidents map layer.

## Additional Information

- **Leaflet:** Leaflet is used for creating the interactive map.
- **Leaflet.markercluster:** This plugin is used for clustering markers on the map to improve performance when dealing with a large number of markers.
- **OverlappingMarkerSpiderfier:** This plugin is used to handle overlapping markers on the map and ensure they are clickable.
- **Data Sources:** 
  - Construction permit data is fetched from the Calgary Open Data Portal API (https://data.calgary.ca/resource/c2es-76ed.json).
  - Traffic incidents data is hosted on Mapbox as a vector tileset.

## Map Design

The following changes/updates were made to the default Mapbox style to make the style used in this application.

- The pixel size of the Traffic Incident Data Points was decreased to 4 pc so that a more specific incident location was visible.
- The Traffic Incident Data Point's colour was changed to bright pink so that the points stood out against the map background.
- The saturation of the Traffic Incident Data Points was increased to 100% so that the points stood out against the map background.
- The colour of the Road Network Road Labels was changed to black for clarity and style.
- The label density of the Road Network Road Labels was increased to 100 % so that roads could be seen and identified when the map was more zoomed out. This change was implemented under the assumption that if someone were looking at traffic accidents, they would want to be able to determine the road name easily.
- The colour of the Motorways and Trunks was changed to dark orange to make the roads more visible. This change was made for the same reason as the previous point (i.e. assuming greater interest in roads due to the database)
- The colour of Minor roads was changed to light orange to be consistent with the Motorways and Trunks but show slightly less emphasis.
- The colour of Road-Paths (footpaths) was changed to light red. This change was made assuming that pedestrians cause some crashes, and therefore application users would want to see how close the recorded  crashes are to footpaths.

## How to Run

To run the web application, simply open the `index.html` file in a web browser. Ensure you have an internet connection, as the map data and traffic incidents layer are fetched dynamically.


