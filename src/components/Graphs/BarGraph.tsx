import React, { useRef, useEffect } from "react";
import Plot, { Data } from "plotly.js";
import { DashboardProps } from "@/types/DashboardDataTypes";

const BarGraph = ({ graphData }: DashboardProps) => {
  const chartRefs = useRef<any[]>([]);

  useEffect(() => {
    // Loop through each chart element and create a Plotly.js chart
    chartRefs.current.forEach((chart, index) => {
      const data: Data[] = [
        {
          x: graphData[index].x,
          y: graphData[index].y,
          type: "bar",
          marker: {
            color: graphData[index].chartBackgroundColor,
          },
        },
      ];

      const layout = {
        title: graphData[index].title,
        xaxis: {
          title: graphData[index].xLabel,
        },
        yaxis: {
          title: graphData[index].yLabel,
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
    <div data-testid="graph-rendered" style={{ height: "100%" }}>
      {graphData.map((_, index) => (
        <div
          key={index}
          ref={(chart) => (chartRefs.current[index] = chart)}
          style={{ height: "100%" }}
        />
      ))}
    </div>
  );
};

export default BarGraph;
