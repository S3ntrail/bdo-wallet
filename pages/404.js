import { useRouter } from "next/router";

import HeadWebsite from "components/global/head";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <HeadWebsite />

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
