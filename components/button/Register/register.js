const RegisterButton = props => {

  return(
    <div className="inline-flex transition ease-in-out duration-500 text-white bg-yellow-450 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">

      <h5 className="font-medium">{props.title}</h5>

    </div>
  )
}

export default RegisterButton