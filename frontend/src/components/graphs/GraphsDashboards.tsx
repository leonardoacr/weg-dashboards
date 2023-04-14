import { firstGraphData } from "@/data/firstGraph";
import { fourthGraphData } from "@/data/fourthGraph";
import { secondGraphData } from "@/data/secondGraph";
import { thirdGraphData } from "@/data/thirdGraph";
import Table from "./../Table";
import GraphStatusHistory from "./GraphStatusHistory";
import dynamic from "next/dynamic";

const DynamicPlot = dynamic(import("./Graphs"), {
  ssr: false,
});

const GraphsDashboards = () => {
  const chartLabelColor = "#636365";
  const chartBackgroundColor = "rgba(255, 255, 255, 1)";
  const chartHeight = "lg:h-96 sm:h-20";

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 px-6 text-black sm:grid-cols-1 lg:grid-cols-2">
        <div className={`${chartHeight} w-full`}>
          <DynamicPlot
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
          <DynamicPlot
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
          <DynamicPlot
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
        <div className={`${chartHeight} w-full bg-white px-4 py-2`}>
          <div>
            <h2 className="px-4 pt-2 font-bold text-label-color">
              Histórico do Status
            </h2>
            <div className="flex h-24 w-full items-center justify-center">
              <GraphStatusHistory />
            </div>
            <div className="grid grid-cols-1 sm:h-1/2 sm:grid-cols-2 md:h-64">
              <div className="h-full w-full">
                <DynamicPlot
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
              <div className="h-full w-full">
                <div className="flex h-full w-full items-center justify-center pr-2">
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
