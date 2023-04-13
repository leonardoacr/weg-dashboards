import { GraphData } from "@/types/GraphsTypes";
import { PlotType } from "plotly.js";

const manufacturingDefects = [
    "Falha no motor",
    "Vazamento de óleo",
    "Ruído excessivo",
    "Sobreaquecimento",
    "Outros",
];

const defectsCount = [130, 90, 60, 45, 25];

const cummulativePercentage = defectsCount.reduce(
    (acc: number[], val: number, index: number, arr: number[]) => {
        const sum = arr.slice(0, index + 1).reduce((a, b) => a + b);
        const percentage = (sum / arr.reduce((a, b) => a + b)) * 100;
        return [...acc, percentage];
    },
    []
);

const firstData: GraphData["data"][0] = {
    x: manufacturingDefects,
    y: defectsCount,
    type: "bar" as PlotType,
    name: "Defeitos",
    marker: {
        color: "blue",
    },
};

const secondData: GraphData["data"][0] = {
    x: manufacturingDefects,
    y: cummulativePercentage,
    type: "scatter" as PlotType,
    name: "Percentual Acumulado",
};

export const thirdGraphData = [firstData, secondData];
