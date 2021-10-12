import Image from 'next/image'

import RegisterButton from 'components/button/Register/register'

const Landing = () => {
  return(
    <div className="h-screen bg-gray-750 flex gap-2 justify-center flex-wrap">
      <div className="w-1/2 text-lef">
        <Image
          src="/financial.svg"
          layout="fixed"
          width={850}
          height={700}
        />
      </div>

      <div className="mt-24 w-1/4">
        <h2 className="font-semibold text-left">BDO & You</h2>

        <h3 className="mt-4 text-left">
          Tracking the Black Desert Online market and keeping track of your personal growth
        </h3>

        <div className="mt-6 w-2/4">
          <RegisterButton 
            title="Start here"
          />
        </div>

      </div>
    </div>
  )
}

export default Landing