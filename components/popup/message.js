
const Message = props => {

  const message = props.message.message
  let status = props.message.status

  switch(status) {
    case 'error':
      status = "bg-red-500 rounded-lg none"
      break;
    case 'succes':
      status = "bg-green-500 rounded-lg none"
      break;
    default:
      status = "hidden"
      break
  }

  return (
    <div className={status}>
      <div className='text-center p-2 mb-4'>
        <div className="text-black">
          <p className="font-medium">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Message