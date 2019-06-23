const brain = require('brain.js');
const trainData = require('./src/training-data');
const serializer = require('./src/serializer');
const net = new brain.NeuralNetwork();

net.train(serializer.serialize(trainData));

const quoteToBeProcessed = "On the Internet of Things nobody knows you're a toaster.";

const output = net.run(serializer.encode(quoteToBeProcessed));

const result = output.happy > output.sad ? 'happy' : 'sad';

console.log('The message has a', result, 'emotional color');