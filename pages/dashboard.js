import Chart from "components/dashboard/chart";
import Transaction from "components/form/transaction";

import HeadWebsite from "components/global/head";

import { useEffect, useContext } from "react";
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
          <section className="flex flex-col bg-black w-full h-screen">
            <div>
              <Chart />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
