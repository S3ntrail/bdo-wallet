import Menu from "components/Menu/Menu";

import dayjs from "dayjs";

const TableRow = ({ data }) => {

  const { id, date, balance, amount } = data
  const profitOrLoss = data.profitorloss

  return (
    <tr key={id}>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">
          {dayjs(date).format("DD/MM/YYYY HH:mm")}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        {profitOrLoss === false ? (
          <div className="text-left text-green-500">Profit</div>
        ) : (
          <div className="text-left text-red-500">Loss</div>
        )}
      </td>
      <td className="p-2 whitespace-nowrap">
        {profitOrLoss === false ? (
          <div className="text-left text-green-500">{amount}</div>
        ) : (
          <div className="text-left text-red-500">{amount}</div>
        )}
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{balance}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">
          <Menu id={id} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
