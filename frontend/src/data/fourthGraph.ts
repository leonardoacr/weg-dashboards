import { GraphData } from "@/types/GraphsTypes";
import { PlotType } from "plotly.js";

export const data = [
    {
        reason: "Concluído",
        duration: "73.89",
        color: "text-green-700",
    },
    {
        reason: "Item descartado",
        duration: "1.75",
        color: "text-red-700",
    },
    {
        reason: "Manutenção",
        duration: "1.50",
        color: "text-red-700",
    },
    {
        reason: "Item temporário",
        duration: "0.83",
        color: "text-red-700",
    },
    {
        reason: "Sem estoque",
        duration: "0.26",
        color: "text-red-700",
    },
];

const colorMap: { [key: string]: string } = data.reduce((acc: any, curr) => {
    acc[curr.reason] = curr.color;
    return acc;
}, {});

const colors = data.map((item) => colorMap[item.reason]);

const firstData: GraphData['data'][0] = {
    x: data.map((item) => item.reason),
    y: data.map((item) => Number(item.duration)),
    type: 'pie' as PlotType,
    marker: {
        colors: colors,
    },
};

export const fourthGraphData = [firstData];
