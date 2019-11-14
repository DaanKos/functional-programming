import runQuery from "./runQuery";
import categoryArray from "./categoryArray";

export default function combineArrays() {
    let combinedArray = [];
  
    categoryArray.map(categoryItem => {
      combinedArray.push(runQuery(categoryItem.categoryName, categoryItem.termMasterId));
    });
  
    return Promise.all(combinedArray).then(data => {
      let merged = [].concat.apply([], data);
      console.log("This is merged, logged in the Promise.all: ", merged);
      return merged
    })
}