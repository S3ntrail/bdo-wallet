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
    <div>
      <Pie
        data={data}
        options={options}
      />
  	</div>
  )
  
};

export default PieChart;
