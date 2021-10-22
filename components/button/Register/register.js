const RegisterButton = props => {

  return(
    <div className="
      transition duration-500 bg-yellow-450 p-4 pl-8 pr-8 cursor-pointer rounded-full
      hover:bg-yellow-600
      md:p-4 pl-4 pr-4"
    >

      <h5 className="font-medium">{props.title}</h5>

    </div>
  )
}

export default RegisterButton