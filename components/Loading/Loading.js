import ReactLoading from 'react-loading'

const Loading = ({type}) => {

  return (
    <div>
      <ReactLoading
        type={type}
      />
    </div>
  )
}

export default Loading