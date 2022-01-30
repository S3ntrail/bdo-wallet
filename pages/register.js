import HeadWebsite from "components/global/head";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Register from "components/form/register";

const Registerpage = () => {
  const [session] = useSession();
  const router = useRouter();

  if (session) {
    router.push('/dashboard')
  }

  return (
    <>
      <HeadWebsite
        title="BDO & You - Register"
        description="Keeping track of your balance by using our unique dashboard and usability to the market place"
      />

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

export default Registerpage