import { firstGraphData } from "@/data/firstGraph";
import { fourthGraphData } from "@/data/fourthGraph";
import { secondGraphData } from "@/data/secondGraph";
import { thirdGraphData } from "@/data/thirdGraph";
import Graphs from "./Graphs";
import Table from "./../Table";
import GraphStatusHistory from "./GraphStatusHistory";

const GraphsDashboards = () => {
  const chartLabelColor = "#636365";
  const chartBackgroundColor = "rgba(255, 255, 255, 1)";
  const chartHeight = "h-80";

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-3 px-6 text-black sm:grid-cols-1 lg:grid-cols-2">
        <div className={`${chartHeight} w-full`}>
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
        <div className={`${chartHeight} w-full`}>
          <Graphs
            graphData={[
              {
                title: "Curva Gaussiana e Six-Sigma",
                data: secondGraphData,
                chartLabelColor: chartLabelColor,
                chartBackgroundColor: chartBackgroundColor,
                xLabel: "Número",
                yLabel: "Quantidade",
              },
            ]}
          />
        </div>
        <div className={`${chartHeight} w-full`}>
          <Graphs
            graphData={[
              {
                title: "Diagrama de Pareto",
                data: thirdGraphData,
                chartLabelColor: chartLabelColor,
                chartBackgroundColor: chartBackgroundColor,
                xLabel: "",
                yLabel: "",
              },
            ]}
          />
        </div>
        <div className={`${chartHeight} w-full bg-white px-4 pt-2`}>
          <div>
            <h2 className="px-4 pt-2 font-bold text-label-color">
              Histórico do Status
            </h2>
            <div className="flex h-24 w-full items-center justify-center">
              <GraphStatusHistory />
            </div>

            <div className="flex h-64">
              <div className="w-1/2">
                <div className="h-full w-full ">
                  <Graphs
                    graphData={[
                      {
                        title: "",
                        data: fourthGraphData,
                        chartLabelColor: "chartLabelColor",
                        chartBackgroundColor: "rgba(255,255,255,0)",
                        xLabel: "",
                        yLabel: "",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="flex h-64 w-1/2 items-center ">
                <div className="flex w-full items-center justify-center pr-2">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsDashboards;
