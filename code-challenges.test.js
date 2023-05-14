// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorShuffle", () => {
it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
expect(["yellow", "blue", "pink", "green"]).toEqual(expect.arrayContaining(colorShuffle(colors1))),
expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(expect.arrayContaining(colorShuffle(colors2)))
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  })
})

// output: ReferenceError: colorShuffle is not defined

// b) Create the function that makes the test pass.
  // pseudo code: 
    // use .shift() method to remove the first value in the array
    // find a method that randomizes the values in an array - .sort(() => Math.random() - 0.5)


const colorShuffle = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 0.5)
}

//output:  PASS  ./code-challenges.test.js


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tallyCounter", () => {
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
it("takes in an object that contains up votes and down votes and returns the end tally", () => {
  expect(tallyCounter(votes1)).toEqual(11)
  expect(tallyCounter(votes2)).toEqual(-31)
  })
})

// output: ReferenceError: tallyCounter is not defined

// b) Create the function that makes the test pass.
  // pseudo code:
    // use .notation to access the object values and subract them

const tallyCounter = (object) => {
  return object.upVotes - object.downVotes
  }

  // output:  PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineNoDupez", () => {
const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
  expect(combineNoDupez(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// output: ReferenceError: combineNoDupez is not defined

// b) Create the function that makes the test pass.
  //pseudo code: 
    // function takes in dynamic number of arguments using ...
    // create const variable combinedArray to hold a new Set of unique values
    // combine new values with .flat() method
    // convert the new combinedArray in to an array

    const combineNoDupez = (...arrays) => {
      const combinedArray = new Set(arrays.flat())
      return [...combinedArray]
    }

// output:  PASS  ./code-challenges.test.js

// console.log(combineNoDupez(dataTypesArray1, dataTypesArray2));