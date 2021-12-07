import { useContext, useState } from "react";
import { DashboardContext } from "components/context/context";

const ChartAmount = (props) => {
  const { chartData } = useContext(DashboardContext);
  const [ chartAmount, setChartAmount] = useState(null)

  if (chartData) {
    setChartAmount(chartAmount = chartData.map((x) => x.amount))
  } else {
    setChartAmount(0)
  }

  return (
    chartAmount
  )
}

export default ChartAmount