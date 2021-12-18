import { useContext } from "react";
import { DashboardContext } from "components/context/context";
import Loading from "components/Loading/Loading";

import dayjs from "dayjs";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const { chartData } = useContext(DashboardContext);

  const chartAmount = chartData ? (chartData.map((x) => x.balance)) : 0 
  const chartDate = chartData ? (chartData.map((x) => dayjs(x.date).format("DD-MM-YYYY"))) : dayjs().format("DD-MM-YYYY")
  
  const data = {
    labels: chartDate.reverse(), // date
    datasets: [
      {
        label: "Profit or loss",
        data: chartAmount.reverse(), // amounts
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="m-8 mt-8 mb-8 p-10 bg-gray-850 rounded-xl">
      <div className="flex flex-wrap">
        {data && options ? (
          <>
            <h2 className="mb-6 text-center">Net</h2>
            <Line data={data} options={options}/>
          </>
        ) : (
          <Loading type="spin" />
        )}
      </div>
    </div>
  );
};

export default Chart;
