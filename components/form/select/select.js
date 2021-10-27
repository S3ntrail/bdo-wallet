const Select = (props) => {

  const item = props.items

  return(
    <select
      id={props.id}
      className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350"
    >
    {item.map( (item,i) => <option key={i} value={i}>{item}</option> )}

    </select>
  )
}

export default Select