import formatData from "./utils/formatData";
import queryCollection from "./utils/queryCollection";
import categoryArray from "./utils/categoryArray";

function runQuery(mainCategory, termMasterId) {
    // The following piece of code was written by user Razpudding (Laurens), from https://codepen.io/Razpudding/pen/LKMbwZ
    // I have edited the code to fit my needs and use my own endpoint
    //Github CMDA
    const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-17/sparql"

    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = queryCollection(termMasterId);

      // Call the url with the query attached, output data
      fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
      .then(res => res.json())
      .then(json => {
      
      // Put the received data in a let named results
      let results = json.results.bindings;
      console.log("Following array is based on: ", mainCategory);
      console.log(formatData(mainCategory, results))
      console.log("The original array of ", mainCategory, " was ", results);
      })
  
}

categoryArray.map(categoryItem => runQuery(categoryItem.categoryName, categoryItem.termMasterId));