import { PlotType } from "plotly.js";

export interface GraphData {
    title: string;
    data: {
        x: number[] | string[];
        y: number[];
        type: PlotType;
        name?: string;
        line?: {
            color?: string;
            width?: number;
        }
        marker?: {
            color?: string;
            colors?: string[]; // add colors property here
        }
    }[];
    chartLabelColor: string;
    chartBackgroundColor: string;
    xLabel: string;
    yLabel: string;
}