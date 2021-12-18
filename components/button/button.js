const Button = props => {

  return(
    <div className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded-full text-lg">

      <h4 className="font-medium">{props.title}</h4>

    </div>
  )
}

const Delete_Button = (props) => {

  return(
    <button onClick={props.onClick} className="inline-flex bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg">

      <h4 className="font-medium text-white">Delete</h4>

    </button>
  )
}

const Cancel_Button = (props) => {
  return(
    <button onClick={props.onClick} className="inline-flex bg-white border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">

      <h4 className="font-medium text-black">Cancel</h4>

    </button>
  )
}



export {
  Button,
  Delete_Button,
  Cancel_Button,
}