import React, { useRef, useEffect } from "react";
import Plot, { Data, Layout } from "plotly.js";
import { DashboardProps } from "@/types/DashboardDataTypes";

const LineGraph = ({ graphData }: DashboardProps) => {
  const chartRefs = useRef<any[]>([]);

  useEffect(() => {
    // Loop through each chart element and create a Plotly.js chart
    chartRefs.current.forEach((chart, index) => {
      const data: Data[] = graphData[index].data.map((dataSet) => ({
        x: dataSet.x,
        y: dataSet.y,
        type: dataSet.type,
        line: {
          color: dataSet?.line.color,
          width: dataSet?.line.width,
        },
      }));
      const layout: Partial<Layout> = {
        title: {
          text: graphData[index].title,
          font: {
            family: "Arial, sans-serif",
            color: "#212529",
            size: 18,
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

export default LineGraph;
