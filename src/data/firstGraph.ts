import { PlotType } from "plotly.js";

const firstData = {
    x: [0, 2, 3, 4, 6, 7, 8, 10, 11],
    y: [2, 2.1, 3.4, 1.5, 3.8, 4, 3.8, 2.2, 3.2],
    type: 'scatter' as PlotType,
    line: {
        color: 'rgb(55, 128, 191)',
        width: 3
    }
};

const secondData = {
    x: [0, 2, 3, 4, 6, 7, 8, 10, 11],
    y: [2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9],
    type: 'scatter' as PlotType,
    line: {
        color: 'rgb(0, 0, 0)',
        width: 3
    }
};

export const firstGraphData = [firstData, secondData];
