import { firstGraph, firstGraphData } from "@/data/firstGraph";
import { secondGraphData } from "@/data/secondGraph";
import BarGraph from "./Graphs/BarGraph";
import Graphs from "./Graphs/LineGraph";
import LineGraph from "./Graphs/LineGraph";
import HeaderDashboards from "./HeaderDashboards";

const Dashboard = () => {
  const chartLabelColor = "#636365";
  const chartBackgroundColor = "rgba(10,31,77, 0.6)";

  return (
    <>
      <div className="block w-full">
        <HeaderDashboards />
        <div className="grid w-full grid-cols-2 gap-3 px-6 pt-6 text-black sm:grid-cols-1 md:grid-cols-2">
          <div className="h-80 w-full">
            <LineGraph
              graphData={[
                {
                  title: "Produtividade por Máquina",
                  data: firstGraphData,
                  chartLabelColor: chartLabelColor,
                  chartBackgroundColor: chartBackgroundColor,
                  xLabel: "Número",
                  yLabel: "Quantidade",
                },
              ]}
            />
          </div>
          <div className="h-80 w-full">
            <Graphs
              graphData={[
                {
                  title: "Produtividade por Máquina",
                  data: firstGraphData,
                  chartLabelColor: chartLabelColor,
                  chartBackgroundColor: chartBackgroundColor,
                  xLabel: "Número",
                  yLabel: "Quantidade",
                },
              ]}
            />
          </div>
          <div className="h-80 w-full bg-black"></div>
          <div className="h-80 w-full bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
{
  /* <BarGraph
            graphData={[
              {
                date: "12/04/2023",
                title: "Productivity by: Machine",
                x: [1, 2, 3, 4, 5, 6],
                y: [1, 2, 3, 4, 5, 3],
                chartLabelColor: chartLabelColor,
                chartBackgroundColor: chartBackgroundColor,
                chartBorderColor: chartBorderColor,
                xLabel: xLabel,
                yLabel: yLabel,
                graphType: "Bar",
              },
            ]}
          /> */
}
