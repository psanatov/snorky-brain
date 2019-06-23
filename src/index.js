const brain = require('brain.js');
// provide optional config object (or undefined). Defaults shown.
const config = {
  inputSize: 20,
  inputRange: 20,
  hiddenLayers: [20,20],
  outputSize: 20,
  learningRate: 0.01,
  decayRate: 0.999,
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

console.log('Training...');


net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
  {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
  {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }


const result = output.black > output.white ? 'black' : 'light';

console.log('color will be: ', result);