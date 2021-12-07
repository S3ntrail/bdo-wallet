import Register from "components/form/register";

import HeadWebsite from "components/global/head";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/client";

import { useRouter } from "next/router";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (session) {
    useEffect(() => {
      setTimeout(() => {
        router.push("/");
      }, 0);
    }, []);
  }

  return (
    <>
      <HeadWebsite />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col justify-center w-full flex-1 text-center">
          <section>
            <Register />
          </section>
        </main>
      </div>
    </>
  );
}
