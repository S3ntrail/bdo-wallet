import Button from 'components/button/button'
import Message from 'components/popup/message'

import {useState} from 'react'

const Register = () => {
  const [result, setResult] = useState([]);

  const registerUser = async event => {

    event.preventDefault()

    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value

    if(!username || username == null || !email || email == null || !password || password == null) {
      setResult({ 
        status:'error', 
        message: "Please fill in the fields"
      })
    }

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    setResult(result)

  }

  return(

  <div className="mt-28">
    <div className="p-6 flex flex-col justify-center items-center bg-gray-700">

      <div>
        <Message message={result}/>
      </div>

      <div>

        <form onSubmit={registerUser} className="flex flex-col">

          <div className="flex flex-col mb-8">
            <label htmlFor="username" className="text-white mb-2">Username</label>
            <input 
              id="username" 
              type="text"
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500" 
              // required 
            />
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="email" className="text-white mb-2">Email</label>
            <input 
              id="email" 
              type="email" 
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500" 
              // required 
            />
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="text-white mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500"
              minLength="8" 
              // required 
            />
          </div>
          

          <button type="submit">
            <Button title="Register" />
          </button>

        </form>

        {/* <div className="">
          <ul>
            <li>Test</li>
          </ul>
        </div> */}

      </div>
      
    </div>
  </div>

  )
  
}

export default Register