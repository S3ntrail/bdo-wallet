const Input = props => {
  return (
    <input 
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350" 
      required
    />
  )
}

export default Input