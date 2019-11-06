console.log('works')
console.log('test')

function runQuery() {
    // The following piece of code was written by user Razpudding (Laurens), from https://codepen.io/Razpudding/pen/LKMbwZ
    // I have edited the code to fit my needs and use my own endpoint
    //Github CMDA
    const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-17/sparql"

    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = `
    #+ summary: Wapens query - haalt alle aantallen van de wapens subcategorieen op per land
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX gn: <http://www.geonames.org/ontology#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    # tel aantallen per land
    SELECT ?subcategorie ?subcategorieLabel ?landLabel (COUNT(?cho) AS ?choCount) WHERE {
    # haal van een term in de thesaurus de subcategorieen op
    <https://hdl.handle.net/20.500.11840/termmaster2091> skos:narrower* ?subcategorie .
    # haal de objecten van deze subcategorieen en de plaats
    ?cho edm:isRelatedTo ?subcategorie .
    ?cho dct:spatial ?plaats .
    ?subcategorie skos:prefLabel ?subcategorieLabel .
    # haal het landLabel op van de plaats
    ?plaats skos:exactMatch/gn:parentCountry ?land .
    ?land gn:name ?landLabel .
    }
    GROUP BY ?subcategorie ?landLabel ?subcategorieLabel
    ORDER BY DESC(?choCount)
    LIMIT 1000
    `
      // Call the url with the query attached, output data
      fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
      .then(res => res.json())
      .then(json => {
      
      // Put the received data in a let named results
      let results = json.results.bindings;
      
      let addedMainCategory = results.map(function(currentObject) {
        currentObject.mainCategory = "mainWapens";
          return currentObject
      })

      let temporaryArray = [];

      let combineValuesPerCountry = addedMainCategory.map(function(currentObject) {
        if (temporaryArray.includes(currentObject.landLabel.value)){
            console.log("Already in array")
          } else {
            temporaryArray.push(currentObject.landLabel.value);
          }
      })

      console.log(addedMainCategory);
      console.log(combineValuesPerCountry);

    //   // Create an empty array, the final filtered data will be pushed to this array
    //   let itemArray = [];
      
    //   // The following piece of code was inspired by Giovanni Kaaijk, from https://github.com/GiovanniKaaijk/frontend-applications/blob/master/my-app/src/App.js
    //   // I have edited the code to fit my needs
    //   // It loops through the received data and pushes their "date" property to an empty array
    //   // If the item in the current loop cycle has a "date" property that's already in the previously mentioned array, the item gets deleted
    //   let unique = [];
    //   for(let i=0; i<results.length; i++){
    //     if(unique.includes(results[i].date.value)) {
    //       console.log("Will delete item from array - duplicate date");  
    //       results.splice([i], 1);
    //     } else {
    //         unique.push(results[i].date.value);
    //     }
    //   }

    //   // This loops through all remaining results and deletes the items from which the image url matches with the copyrightPic url
    //   for(let i=0; i<results.length; i++){
    //       if((results[i].pic.value) === copyrightPic) {
    //           results.splice([i], 1)
    //           console.log("Deleted item from array - Copyright image");
    //       }
    //   }

    //   // The following piece of code was inspired by Kyle Bot, from https://github.com/kylebot0/frontend-applications/blob/master/client/src/app.js
    //   // This code pushes all remaining results to the itemArray but randomizes the order
    //   // This needs to be done so the items shown to the user will be randomized
    //   for(let i=0; i < results.length; i++){
    //       var item = results[Math.floor(Math.random() * results.length)];
    //       itemArray.push(item);
    //   }

    //   // The items in the itemArray get pushed to the "objects" array in state
    //   this.setState({ objects: itemArray })

    //   // Fires pushNextObjects funtion
    //   this.pushNextObjects();
      })
  
}

runQuery();