const Button = props => {

  return(
    <div className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-full text-lg">

      <h4 className="font-medium">{props.title}</h4>

    </div>
  )
}

export default Button