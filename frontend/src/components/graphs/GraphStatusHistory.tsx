import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { statusData } from "@/data/statusGraph";

const GraphStatusHistory = () => {
  return (
    <VictoryChart
      domainPadding={{ x: 30 }}
      width={2000}
      height={160}
      padding={{ top: 0, bottom: 0, left: 50, right: 50 }}
      style={{ parent: { maxWidth: "100%" } }}
    >
      <VictoryAxis
        tickValues={statusData.map((data) => data.hour)}
        tickFormat={(hour) => hour}
        style={{ tickLabels: { fontSize: 20 } }}
      />
      <VictoryBar
        data={statusData}
        x="hour"
        y={(d) => (d.status === 0 ? 1 : d.status)}
        style={{
          data: {
            fill: ({ datum }) => (datum.status === 1 ? "green" : "#ff0000"),
            opacity: ({ datum }) => (datum.status === 0 ? 0.5 : 1),
          },
        }}
        barWidth={82}
      />
    </VictoryChart>
  );
};

export default GraphStatusHistory;
