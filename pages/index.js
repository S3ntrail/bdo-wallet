import HeadWebsite from "components/global/head";

import Image from 'next/image'

import RegisterButton from 'components/button/Register/register'

// export const getServerSideProps = async() => {

//   const res = await fetch('/api/login', {

//   })

//   if(false) {
//     return {
//       props: {},
//       redirect: {
//         destination: "/dashboard"
//       }
//     }
//   }
//   return {
//     props: {},
//   }
// }

export default function Home() {
  return (
    <>
      <HeadWebsite />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col justify-center w-full flex-1 text-center bg-gray-750">
          <section>
            <div className="h-screen flex gap-2 justify-center flex-wrap">
              <div className="w-1/2 text-left relative md:hidden lg:block mb-24">
                <Image src="/financial.svg" layout="fill" objectFit="fill" />
              </div>

              <div className="mt-24 w-1/4">
                <h2 className="font-semibold text-left">BDO & You</h2>

                <h3 className="mt-4 text-left">
                  Tracking the Black Desert Online market and keeping track of
                  your personal growth
                </h3>

                <div className="mt-6 w-2/4">
                  <RegisterButton title="Start here" />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="h-screen flex">
            <Cause />
          </section>*/}
        </main>
      </div>
    </>
  );
}
