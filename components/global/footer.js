const Footer = () => {
  return(
  <div className="bg-black flex flex-wrap items-center justify-between p-3 m-auto">

    <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">

      <ul className="flex mx-auto text-white text-center">
        <li className="p-2 cursor-pointer hover:underline"></li>
        <li className="p-2 cursor-pointer hover:underline"></li>
        <li className="p-2 cursor-pointer hover:underline"></li>
      </ul>

      {/* <div className="flex mx-auto text-white text-center">
        Copyright Business Name © 2021
      </div> */}
    </div>
  </div>
  )
}

export default Footer

