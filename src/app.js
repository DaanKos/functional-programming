import formatData from "./utils/formatData";
import queryCollection from "./utils/queryCollection";

const popularcultureTermMasterId = 10045782;
const jachtvisserijvoedselgaringTermMasterId = 2803;
const wapenTermMasterId = 2091;
const landtuinenbosbouwTermMasterId = 2819;
const veeteeltenproductenTermMasterId = 1843;
const voedingdrankgenotmiddelenTermMasterId = 2839;
const kledingenpersoonlijkeversieringTermMasterId = 2704;
const lichaamsverzorginggeneeskundepersoonlijkcomfortTermMasterId = 2718;
const vestigingTermMasterId = 2726;
const nijverheidhandelendienstverleningTermMasterId = 2754;
const vervoerTermMasterId = 2624;
const communicatieTermMasterId = 2634;
const sociaalpolitiekjuridischTermMasterId = 2642;
const levenscyclusTermMasterId = 2649;
const religieenritueelTermMasterId = 2652;
const kunstTermMasterId = 2657;
const ontspanningsportenspelTermMasterId = 2676;
const onbepaaldTermMasterId = 1834;
const strijdenoorlogTermMasterId = 16239;

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
      })
  
}

runQuery("mainPopularCulture", popularcultureTermMasterId);
runQuery("mainJachtVisserijVoedselgaring", jachtvisserijvoedselgaringTermMasterId);
runQuery("mainWapens", wapenTermMasterId);
runQuery("mainLandTuinEnBosbouw", landtuinenbosbouwTermMasterId);
runQuery("mainVeeteeltEnProducten", veeteeltenproductenTermMasterId);
runQuery("mainVoedingDrankGenotmiddelen", voedingdrankgenotmiddelenTermMasterId);
runQuery("mainKledingEnPersoonlijkeversiering", kledingenpersoonlijkeversieringTermMasterId);
runQuery("mainLichaamsVerzorgingGeneeskundePersoonlijkcomfort", lichaamsverzorginggeneeskundepersoonlijkcomfortTermMasterId);
runQuery("mainVestiging", vestigingTermMasterId);
runQuery("mainNijverheidHandelEnDienstverlening", nijverheidhandelendienstverleningTermMasterId);
runQuery("mainVervoer", vervoerTermMasterId);
runQuery("mainCommunicatie", communicatieTermMasterId);
runQuery("mainSociaalPolitiekJuridisch", sociaalpolitiekjuridischTermMasterId);
runQuery("mainLevenscyclus", levenscyclusTermMasterId);
runQuery("mainReligieEnRitueel", religieenritueelTermMasterId);
runQuery("mainKunst", kunstTermMasterId);
runQuery("mainOntspanningSportEnSpel", ontspanningsportenspelTermMasterId);
runQuery("mainOnbepaald", onbepaaldTermMasterId);
runQuery("mainStrijdEnOorlog", strijdenoorlogTermMasterId);