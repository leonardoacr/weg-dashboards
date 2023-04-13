import GraphsDashboards from "./GraphsDashboards";
import HeaderDashboards from "./HeaderDashboards";

const Dashboard = () => {
  return (
    <>
      <div className="block h-full w-full">
        <HeaderDashboards />
        <GraphsDashboards />
      </div>
    </>
  );
};

export default Dashboard;
