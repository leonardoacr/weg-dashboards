import { PlotType } from "plotly.js";

export interface GraphData {
    title: string;
    data: {
        x: number[];
        y: number[];
        type: PlotType;
        line: {
            color?: string;
            width?: number;
        }
    }[];
    chartLabelColor: string;
    chartBackgroundColor: string;
    xLabel: string;
    yLabel: string;
}