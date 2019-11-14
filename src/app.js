import createFinalArray from "./utils/createFinalArray";

function createViz() {
  createFinalArray().then(result => {
    console.log("Result given to create final array: ", result);
    console.log("Can create viz in this function, result is available...")
  })
}

createViz();