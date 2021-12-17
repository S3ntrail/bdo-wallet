import HeadWebsite from "components/global/head";

import Image from "next/image";

import RegisterButton from "components/button/Register/register";

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
      <HeadWebsite 
        title="BDO & You"
        description="Keeping track of your balance by using our unique dashboard and usability to the market place"
      />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col justify-center w-full flex-1 text-center bg-gray-750">
          <section className="text-gray-200 bg-gray-750 h-screen">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <Image 
                  src="/calculator.svg"
                  layout="responsive"
                  width={2400}
                  height={1500}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 text-white">
                  BDO & YOU
                </h1>
                <p className="mb-8 leading-relaxed">
                  Tracking your income and outcome of your Black Desert Online journey.
                  {' '}
                  Make use of our handy dashboard and visualize your income and outcome. Keep track of your transactions and edit or delete them if needed.
                  {' '}
                </p>
                <div className="flex justify-center">
                  <a href="/register">
                    <RegisterButton 
                      title="Start now"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
