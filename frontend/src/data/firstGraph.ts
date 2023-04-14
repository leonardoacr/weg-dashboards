import { PlotType } from "plotly.js";

const arraySize = 30;
const maxValue = 2;
const xValues = Array.from(Array(arraySize).keys()); // creates an array with values [0, 1, 2, ..., 29]

const firstData = {
    x: xValues.map(x => x * 0.5), // generates an array with values [0, 0.5, 1, 1.5, ..., 14.5]
    y: Array.from({ length: arraySize }, () => Math.random() * maxValue), // generates an array with arraySize random values between 0 and 5
    type: 'scatter' as PlotType,
    name: 'Dados reais',
    line: {
        color: 'rgb(55, 128, 191)',
        width: 3
    }
};

const firstDataSum = firstData.y.reduce((a, b) => a + b, 0);
const firstDataAverage = firstDataSum / arraySize;

const secondData = {
    x: xValues.map(x => x * 0.5),
    y: Array.from({ length: arraySize }, () => firstDataAverage),
    type: 'scatter' as PlotType,
    name: 'Média',
    line: {
        color: 'rgb(0, 0, 0)',
        width: 3
    }
};


const thirdData = {
    x: xValues.map(x => x * 0.5),
    y: Array.from({ length: arraySize }, () => Math.random() * maxValue),
    type: 'scatter' as PlotType,
    name: 'Dados simulados',
    line: {
        color: 'rgb(255, 0, 0)',
        width: 2
    }
};



export const firstGraphData = [firstData, secondData, thirdData];
