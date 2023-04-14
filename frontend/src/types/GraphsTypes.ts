import { PlotType } from "plotly.js";

export interface GraphData {
    title: string;
    data: {
        x: number[] | string[];
        y: number[];
        type: PlotType;
        mode?: "lines" | "markers" | "text" | "lines+markers" |
        "text+markers" | "text+lines" | "text+lines+markers" | "none";
        fill?: "none" | "tozeroy" | "tozerox" | "tonexty" |
        "tonextx" | "toself" | "tonext" | undefined;
        name?: string;
        line?: {
            color?: string;
            colors?: string[];
            width?: number;
        }
        marker?: {
            color?: string;
            colors?: string[];
            size?: number;
        }
    }[];
    chartLabelColor: string;
    chartBackgroundColor: string;
    xLabel: string;
    yLabel: string;
}
