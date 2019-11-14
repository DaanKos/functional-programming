import compareArrays from "./compareArrays";
import combineArrays from "./combineArrays";

export default function createFinalArray() {
    return combineArrays().then(result => {
      console.log("Result given to combine array: ", result);
      let compared = compareArrays(result);
      return compared
    })
}