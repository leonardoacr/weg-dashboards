import { firstGraphData } from "@/data/firstGraph";
import { fourthGraphData } from "@/data/fourthGraph";
import { secondGraphData } from "@/data/secondGraph";
import { thirdGraphData } from "@/data/thirdGraph";
import Graphs from "./Graphs";
import HeaderDashboards from "./HeaderDashboards";
import Table from "./Table";

const Dashboard = () => {
  const chartLabelColor = "#636365";
  const chartBackgroundColor = "rgba(10,31,77, 0.6)";
  const chartHeight = "h-96";

  return (
    <>
      <div className="block w-full">
        <HeaderDashboards />
        <div className="grid w-full grid-cols-2 gap-3 px-6 pt-6 text-black sm:grid-cols-1 md:grid-cols-2">
          <div className={`h-80 ${chartHeight} w-full`}>
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
          <div className={`${chartHeight} w-full bg-white px-6 pt-6`}>
            <div>
              <h2 className="font-bold text-label-color">
                Histórico do Status
              </h2>
              <div className="flex">
                <div className="w-1/2">
                  <div className="h-80">
                    <Graphs
                      graphData={[
                        {
                          title: "",
                          data: fourthGraphData,
                          chartLabelColor: chartLabelColor,
                          chartBackgroundColor: chartBackgroundColor,
                          xLabel: "",
                          yLabel: "",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="flex h-60 w-1/2 items-center">
                  <div className=" pr-2">
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
