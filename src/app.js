import formatData from "./utils/formatData";

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
      
      console.log(formatData("mainWapens", results))
      })
  
}

runQuery();

