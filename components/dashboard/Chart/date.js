import { useContext, useState } from "react";
import { DashboardContext } from "components/context/context";
import * as dayjs from "dayjs";

const ChartDate = (props) => {
  const { chartData } = useContext(DashboardContext);
  const [ chartDate, setChartDate] = useState(null)

  if (chartData) {
    setChartDate(chartData.map((x) => dayjs(x.date).format("DD-MM-YYYY")));
  } else {
    setChartDate(dayjs().format("DD-MM-YYYY"));
  }

  return chartDate
}

export default ChartDate