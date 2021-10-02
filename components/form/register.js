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
    <div className="h-screen bg-gray-750 flex justify-center">

      <div className="flex flex-wrap items-center m-32 mt-10 mb-48 p-20 bg-gray-850 rounded-xl">

        <div>

          <div className="mb-8">
            <h3>Register</h3>
          </div>

          <div className="mb-8">
            <hr></hr>
          </div>

          <div>
            <Message message={result}/>
          </div>

          <form onSubmit={registerUser}>

            <div className="flex flex-col mb-8">
              <label htmlFor="username" className="text-white text-left mb-2 tracking-wider uppercase">username</label>
              <input 
                id="username" 
                type="text"
                placeholder="username"
                className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350" 
                // required 
              />
            </div>

            <div className="flex flex-col mb-8">
              <label htmlFor="password" className="text-white text-left mb-2 tracking-wider uppercase">Password</label>
              <input 
                id="password" 
                type="password"
                placeholder="password" 
                className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350"
                minLength="8" 
                // required 
              />
            </div>

            <div className="flex flex-col mb-8">
              <label htmlFor="email" className="text-white text-left mb-2 tracking-wider uppercase">Email</label>
              <input 
                id="email" 
                type="email"
                placeholder="email address" 
                className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350"
                // required 
              />
            </div>

            <div className="mt-16">
              <hr></hr>
            </div>

            <button type="submit" className="mt-8">
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