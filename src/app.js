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

            plotCategoryPerCountry(result)
        })
    }

    function plotCategoryPerCountry(result) {
        console.log("This is result in d3: ", result);
        
        svg
            .selectAll('text')
            .data(result)
            .enter()
            .append('text')
            .attr('class', 'categoryLabel')
            .attr('x', function(d) {
              return projection([d.countryLong, d.countryLat])[0]
            })
            .attr('y', function(d) {
              return projection([d.countryLong, d.countryLat])[1]
            })
            .text(d => d.categoryWithMostObjects.slice(4))
            .style("text-anchor", "middle")
    }
  })
}

createViz();