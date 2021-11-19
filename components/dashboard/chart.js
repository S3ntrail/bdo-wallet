import React from "react";
import * as dayjs from 'dayjs'

import { useContext } from "react";
import { DashboardContext } from "components/context/context";

import { Line } from "react-chartjs-2";

const Chart = () => {
  const { chartData } = useContext(DashboardContext);

  const chartDate = chartData.map(x => dayjs(x.date).format('DD-MM-YYYY'))

  const chartAmount = chartData.map(x => x.amount)

  const data = {
    labels: chartDate, // date
    datasets: [
      {
        label: "Profit or loss",
        data: chartAmount, // amounts
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="justify-center">
      <div className="flex flex-wrap items-center m-16 mt-4 mb-20 p-10 bg-gray-850 rounded-xl">
        <div className="flex flex-wrap">
          <h2 className="mb-6 text-center">Net</h2>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
