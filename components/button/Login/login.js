const SignInButton = props => {

  return(
    <button className="bg-blue-350 p-4 pl-6 pr-6 cursor-pointer rounded-full">

      <h4 className="font-medium">{props.title}</h4>

    </button>
  )
}

export default SignInButton