const RegisterButton = props => {

  return(
    <button className="bg-yellow-450 p-4 pl-8 pr-8 cursor-pointer rounded-full">

      <h4 className="font-medium">{props.title}</h4>

    </button>
  )
}

export default RegisterButton