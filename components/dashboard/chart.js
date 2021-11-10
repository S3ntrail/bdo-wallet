import { Pie } from "@nivo/pie";

import React from "react";

import {useContext} from 'react'
import { DashboardContext } from "components/context/context";


const PieChart = () => {

  const { pieData } = useContext(DashboardContext)

  return (
    <Pie
      width={300}
      height={500}
      data={pieData}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={3}
      labelSkipWidth={18}
      slicesLabelsTextColor="#FFFFFF"
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={8}
      radialLabelsLinkHorizontalLength={8}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      slicesLabelsSkipAngle={10}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export default PieChart;
