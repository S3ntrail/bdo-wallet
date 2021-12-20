import Chart from "components/dashboard/chart";
import TransactionTable from "components/dashboard/table";

import HeadWebsite from "components/global/head";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/client";

import { useRouter } from "next/router";

export default function Home() {
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
                <TransactionTable />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
