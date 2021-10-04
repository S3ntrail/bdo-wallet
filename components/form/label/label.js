const Label = props => {
  return (
    <label 
      htmlFor={props.for}
      className="text-white text-left mb-2 tracking-wider uppercase"
    >
      {props.title}
    </label>
  )
}

export default Label