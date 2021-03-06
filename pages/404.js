import { useRouter } from "next/router";

import HeadWebsite from "components/global/head";

import { useEffect } from "react";

const Errorpage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <HeadWebsite
        title="BDO & You - 404"
        description="Keeping track of your balance by using our unique dashboard and usability to the market place"
      />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col justify-center w-full flex-1 text-center">
          <section>
            <div className="relative h-screen">
              <div className="mb-16">
                <div className="pt-32 mb-16 text-center">
                  <h1 className="text-black">Error 404 | Page not found</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Errorpage