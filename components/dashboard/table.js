import { useContext } from "react";
import { DashboardContext } from "components/context/context";
import Menu from "components/Menu/Menu"

import dayjs from "dayjs";

const TransactionTable = () => {
  const { chartData } = useContext(DashboardContext);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-850 shadow-lg rounded-lg">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-200">Transactions</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-850">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Profit/Loss</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {chartData && chartData.length > 0 ? (
                chartData.map((trans) => (
                  <tr key={trans.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        {dayjs(trans.date).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      {trans.profitorloss === false ? (
                        <div className="text-left text-green-500">Profit</div>
                      ) : (
                        <div className="text-left text-red-500">Loss</div>
                      )}
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      {trans.profitorloss === false ? (
                        <div className="text-left text-green-500">
                          {trans.amount}
                        </div>
                      ) : (
                        <div className="text-left text-red-500">
                          {trans.amount}
                        </div>
                      )}
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center"><Menu id={trans.id}/></div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">Loading...</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">Loading...</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">Loading...</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">Loading...</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
