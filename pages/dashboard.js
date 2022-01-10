import Chart from "components/dashboard/chart";
import TableRow from "components/dashboard/tablerow";
import HeadWebsite from "components/global/head";

import { useEffect, useContext } from "react";
import { DashboardContext } from "components/context/context";
import { useSession, signIn } from "next-auth/client";

import { useRouter } from "next/router";

export default function Home() {
  const {transactions} = useContext(DashboardContext)
  const [session, loading] = useSession();
  const router = useRouter();

  if (!session) {
    useEffect(() => {
      setTimeout(() => {
        router.push(signIn());
      }, 0);
    }, []);
  }

  return (
    <>
      <HeadWebsite
        title="BDO & You - Dashboard"
        description="Keeping track of your balance by using our unique dashboard and usability to the market place"
      />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col justify-center text-center w-full">
          <section className="text-gray-400 bg-gray-750 body-font">
            <div className="container px-2 py-12 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <Chart />
              </div>
              <div className="flex flex-col text-center w-full mb-12">
                <div className="w-full bg-gray-850 mx-auto mt-2 bg-gray-850 rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-200">
                      Transactions
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-850">
                          <tr>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Date
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Profit/Loss
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Amount
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Balance after
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-center">
                                Actions
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          {transactions && transactions.length > 0 ? (
                            transactions.map( (transaction) => (
                              <TableRow data={transaction} />
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
