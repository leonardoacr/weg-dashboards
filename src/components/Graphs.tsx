import React, { useRef, useEffect } from "react";
import Plot, { Data, Layout } from "plotly.js";
import { GraphData } from "@/types/GraphsTypes";

interface Props {
  graphData: GraphData[];
}

export interface DataWithPie extends Omit<GraphData["data"][0], "x" | "y"> {
  type: "pie";
  values: number[];
  labels: string[] | number[];
}

const Graphs = ({ graphData }: Props) => {
  const chartRefs = useRef<any[]>([]);

  useEffect(() => {
    // Loop through each chart element and create a Plotly.js chart
    chartRefs.current.forEach((chart, index) => {
      const data: Data[] = graphData[index].data.map((dataSet) => {
        const { type, ...rest } = dataSet;
        if (type === "pie") {
          // For pie chart, use the correct property name
          const pieData: DataWithPie = {
            ...rest,
            type: "pie",
            values: rest.y,
            labels: rest.x,
          };
          return pieData;
        } else {
          // For other charts, use the default property name
          const nonPieData: Data = {
            ...rest,
            type: type,
          };
          return nonPieData;
        }
      });

      const layout: Partial<Layout> = {
        title: {
          text: graphData[index].title,
          font: {
            color: "#212529",
            size: 16,
          },
          x: 0.04,
          y: 0.9,
          yanchor: "top",
        },
        xaxis: {
          title: graphData[index].xLabel,
        },
        yaxis: {
          title: graphData[index].yLabel,
        },
        legend: {
          traceorder: "normal",
        },
      };

      Plot.newPlot(chart, data, layout);
    });

    // Cleanup function to remove Plotly.js charts
    return () => {
      chartRefs.current.forEach((chart) => {
        Plot.purge(chart);
      });
    };
  }, [graphData]);

  return (
    <div data-testid="graph-rendered" className="h-full">
      {graphData.map((_, index) => (
        <div
          key={index}
          ref={(chart) => (chartRefs.current[index] = chart)}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default Graphs;