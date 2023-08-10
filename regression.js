	// Import the necessary libraries
const regression = require('regression');
 
/**
 * This function trains a regression model using the provided data and returns the model.
 * 
 * @param {Array<Array<number>>} data - The training data for the regression model.
 * @returns {Object} - The trained regression model.
 */
function trainRegressionModel(data) {
  try {
    // Check if the data is valid
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid data. Please provide a non-empty array of number arrays.');
    }
 
    // Extract the x and y values from the data
    const xValues = data.map(entry => entry[0]);
    const yValues = data.map(entry => entry[1]);
 
    // Train the regression model
    const result = regression.linear(data);
 
    // Return the trained model
    return result;
  } catch (error) {
    // Log the error
    console.error(`Error: ${error.message}`);
    return null;
  }
}
 
// Example usage
const trainingData = [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]];
const model = trainRegressionModel(trainingData);
console.log(model);
