const Button = props => {

  return(
    <div className="bg-indigo-400 cursor-pointer m-auto p-4 w-48 rounded-full">

      <h4 className="font-medium">{props.title}</h4>

    </div>
  )
}

export default Button