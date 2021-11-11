import React from "react";

import { useContext } from "react";
import { DashboardContext } from "components/context/context";

import { Pie } from 'react-chartjs-2'

const PieChart = () => {
  const { pieData } = useContext(DashboardContext);

  const data = {
    labels: [
      'Profit',
      'Loss'
    ],
    datasets: [{
      label: '# of Votes',
      data: pieData,
      backgroundColor: [
      '#FF6384',
      '#36A2EB'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB'
      ],
      borderWidth: 1,
    }]
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        boxWidth: 10
      }
    }
  }

  return (
    <div className="justify-center">
      <div className="flex flex-wrap items-center m-16 mt-4 mb-20 p-10 bg-gray-850 rounded-xl">
        <div className="flex flex-col">
          <h2 className="mb-6 text-center">Net</h2>
          <Pie
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  )
  
};

export default PieChart;
