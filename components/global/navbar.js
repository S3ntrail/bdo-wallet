import Link from 'next/link'

import Login from './navbar/Login'

const Navbar = () => {

  return (

  <div className="w-full p-4 flex flex-wrap items-center md:flex-no-wrap bg-black absolute z-50">

    {/* Left side navbar */}
    <div className="mr-4 md:mr-8">
      <Link href="/">
        <a>
          <h1>
            BDO & YOU
          </h1>
        </a>
      </Link>
    </div>
    {/* End Left side navbar */}

    <div className="ml-auto md:hidden">
      <button className="flex items-center px-3 py-2 border rounded" type="button">
        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>

    <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

      {/* Middle side navbar */}
      <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
        <li>

          <Link href="/dashboard">
            <a 
              className="block px-4 py-1 md:p-2 lg:px-4" 
              title="Dashboard"
            >
              Dashboard
            </a>
          </Link>

        </li>

        <li>
          <Link href="/market">
            <a 
              className="block px-4 py-1 md:p-2 lg:px-4" 
              title="Link"
            >
              Market
            </a>
          </Link>
        </li>

        {/* <li>
          <Link href="#">
            <a 
              className="block px-4 py-1 md:p-2 lg:px-4" 
              title="Link"
            >
              Test
            </a>
          </Link>
        </li> */}

      </ul>
      {/* End Middle side navbar */}

      {/* Right side navbar */}
      <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
        <li>

          <Login />

          {/* <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Link</a> */}
        </li>
      </ul>
      {/* End Right side navbar */}

    </div>

  </div>
  )

}

export default Navbar