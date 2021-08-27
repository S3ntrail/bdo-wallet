import { providers, signIn, getSession, csrfToken } from "next-auth/client"
import {useRouter} from 'next/router'

import {useState} from 'react'

import Button from "components/button/button"

import Link from 'next/link'

const Login = ({providers, csrfToken}) => {

  // const [loginError, setLoginError] = useState('');
  const router = useRouter

  const loginUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/auth', {
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
  }

  return(

  <div className="mt-28">
    <div className="p-6 flex flex-col justify-center items-center bg-gray-700">

      <div>
        <div>
          {/* {loginError} */}
        </div>
        <form onSubmit={loginUser} className="flex flex-col">

          <div className="flex flex-col mb-8">
            <label htmlFor="email" className="text-white mb-2">Email</label>
            <input 
              id="email" 
              type="text"
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500" 
              required 
            />
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="text-white mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500" 
              required 
            />
          </div>
          

          <button type="submit">
            <Button title="Login" />
          </button>

        </form>

        {/* <div className="mt-4">
          <ul>
            <li>
              <a onClick={() => newUser()}>
                Register here
              </a>
            </li>
          </ul>
        </div> */}

      </div>
      
    </div>
  </div>

  )
  
}


export default Login