{

  const katas = {

    // Default parameter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
    reverseString: (string, delimeter = "") => string.split(delimeter).reverse().join(delimeter),
    reverseSentence: string => katas.reverseString(string, " "),

    findMinValue: array => Number(array.sort()[ 0 ]),
    findMaxValue: array => Number(array.sort()[array.length - 1]),

    calculateRemainder: (numerator, denominator) => denominator % numerator,

    // Sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // Array.from(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    findDistinctValues: array => Array.from(new Set(array)),

    // Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    findDistinctValuesWithCounts: array => array.reduce((counts, num) => {
      counts[num] = (counts[num] || 0) + 1
     
      return counts
    }, {}),

    evaluateExpression: (expression, values) => {
      const startingAccumulator = { sign: +1, total: 0 } // Using "+1" and "-1" to represent "+" and "-", respectively
      
      // Destructuring: http://javascript.info/destructuring-assignment
      const { total } = expression.split(" ").reduce(({ sign, total }, token) => {
        if (token === "+") return { sign: +1, total }
        if (token === "-") return { sign: -1, total }

        return { 
          sign: +1, 
          total: total + sign * values[token] 
        }
      }, startingAccumulator)

      return total
    }

  }








  // Beyond this point lies testing

  const numbers = [1, 3, 5, 3, 7, 3, 1, 1, 5]

  const results = {
    reverseString: katas.reverseString("abc"),
    reverseSentence: katas.reverseSentence("a b c"),

    findMinValue: katas.findMinValue(numbers),
    findMaxValue: katas.findMaxValue(numbers),

    calculateRemainder: katas.calculateRemainder(2, 3),

    findDistinctValues: katas.findDistinctValues(numbers).toString(),
    findDistinctValuesWithCounts: JSON.stringify(katas.findDistinctValuesWithCounts(numbers)),

    evaluateExpression: katas.evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}), 
  }

  console.assert(
    results.reverseString === "cba", 
    results.reverseString
  )

  console.assert(
    results.reverseSentence === "c b a", 
    results.reverseSentence
  )

  console.assert(
    results.findMinValue === 1, 
    results.findMinValue
  )

  console.assert(
    results.findMaxValue === 7, 
    results.findMaxValue
  )
    
  console.assert(
    results.calculateRemainder === 1, 
    results.calculateRemainder
  )
    
  console.assert(
    results.findDistinctValues === [1, 3, 5, 7].toString(), 
    results.findDistinctValues
  )
  
  console.assert(
    results.findDistinctValuesWithCounts === `{"1":3,"3":3,"5":2,"7":1}`, 
    results.findDistinctValuesWithCounts
  )
  
  console.assert(
    results.evaluateExpression === -3, 
    results.evaluateExpression
  )

}

/*

  For today's katas, you will implement several functions. You should write at least two unit tests for each function demonstrating their behavior. All your output can be via console.log() and/or console.assert(); you don't need to do any HTML formatting for any of these katas.

    Reverse a string
    Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
    Find the minimum value in an array
    Find the maximum value in an array
    Calculate a remainder (given a numerator and denominator)
    Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
    Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
    Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).

  As an example, a unit test for the 8th kata might look like:

  console.assert(evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);

*/