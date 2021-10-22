const SignInButton = props => {

  return(
    <div className="
      transition duration-500 bg-blue-350 p-4 pl-6 pr-6 cursor-pointer rounded-full 
      hover:bg-blue-500
      md:p-4 pl-4 pr-4"
    >

      <h5 className="font-medium">{props.title}</h5>

    </div>
  )
}

export default SignInButton