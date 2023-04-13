import { PlotType } from "plotly.js";

interface GraphData {
    data: {
        x: number[];
        y: number[];
        type: PlotType;
        line: {
            color?: string;
            width?: number;
        };
    }[];
}

const firstData = {
    x: [0, 2, 3, 4, 6, 7, 8, 10, 11],
    y: [2, 2.1, 3.4, 1.5, 3.8, 4, 3.8, 2.2, 3.2],
    type: 'bar' as PlotType,
    marker: {
        color: 'rgb(55, 128, 191)',
    }
};

const secondData = {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    y: [
        0.1, 0.3, 0.8, 1.6, 3.1, 4.4, 4.9, 4.4, 3.1, 1.6, 0.8, 0.3
    ],
    type: 'scatter' as PlotType,
    line: {
        color: 'rgb(255, 127, 14)',
        width: 3
    }
};

const secondGraphData: GraphData = {
    data: [firstData, { ...secondData, line: { color: '', width: 0 } }]
};

export default secondGraphData;
