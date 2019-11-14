import createFinalArray from "./utils/createFinalArray";
import * as d3 from 'd3'
import { feature } from 'topojson';
const { select, geoPath, geoNaturalEarth1 } = d3;

function createViz() {
  createFinalArray().then(result => {
    console.log("Result given to create final array: ", result);
    console.log("Can create viz in this function, result is available...");

    const svg = select('svg')
    const projection = geoNaturalEarth1()
    const pathGenerator = geoPath().projection(projection)

    setupMap()
    drawMap(result)

    function setupMap(){
      svg
        .append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({ type: 'Sphere' }))
    }

    function drawMap(result) {
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
        .then(data => {
          const countries = feature(data, data.objects.countries);
          svg
            .selectAll('path')
            .data(countries.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)

          plotLocations(result)
        })
    }

    function plotLocations(result) {
        console.log("This is result in d3: ", result);

        svg
            .selectAll('circle')
            .data(result)
            .enter()
            .append('circle')
            .attr('class', 'circles')
            .attr('cx', function(d) {
              return projection([d.countryLong, d.countryLat])[0]
            })
            .attr('cy', function(d) {
              return projection([d.countryLong, d.countryLat])[1]
            })
            .attr('r', '8px')
            //Opacity is quite heavy on the rendering process so I've turned it off
            //.attr('opacity', .5)
    }
  })
}

createViz();