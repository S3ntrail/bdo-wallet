const Input = (props) => {
  return (
    <input
      min={props.min}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
      required
      className="text-black placeholder-gray-600 w-full px-4 py-3 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    ></input>
  );
};

export default Input;
