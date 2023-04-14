import { GraphData } from "./GraphsTypes";

export interface IDashboardData {
    [key: string]: number[];
    x: number[];
    y: number[];
}

export interface IDashboardStateData {
    dashboardData: IDashboardData;
    isLoading: boolean;
    isError: boolean;
}

export interface DashboardProps {
    graphData: GraphData[];
}

export interface IDashboardContext {
    graphData: {
        xKey: string;
        yKey: string;
        title: string;
        index: number;
    };
    chartLabelColor: string;
    chartBackgroundColor: string;
    chartBorderColor: string;
    xLabel: string;
    yLabel: string;
    passDashboardData: IDashboardData;
    setGraphData: (
        xKey: string,
        yKey: string,
        title: string,
        index: number
    ) => void;
    setPassDashboardData: (dashboardData: IDashboardData) => void;
}