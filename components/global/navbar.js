import Link from 'next/link'

import NavbarStatus from './navbar/navbarstatus'

const Navbar = () => {
  return (

    <nav className="bg-gray-850 w-min-screen z-10">
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-center">
        
        <div className="mr-4 md:mr-8">
          <a href="/">
            <h1 className="font-bold">BDO & YOU</h1>
          </a>
        </div>

        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

          <ul className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">

            <li>
              <Link href="/market">
                <a className="block px-4 py-4 font-semibold transition duration-500 hover:bg-purple-600 hover:text-white" href="#" title="Link">Market</a>
              </Link>
            </li>

            <li>
              <Link href="/dashboard">
                <a className="block px-4 py-4 font-semibold transition duration-500 hover:bg-purple-600 hover:text-white" href="#" title="Link">Dashboard</a>
              </Link>
            </li>

          </ul>

          <div className="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <NavbarStatus />
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar