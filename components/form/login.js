import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import Button from "components/button/button"

import Link from 'next/link'

const Login = () => {

  const loginUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/login', {
      body: JSON.stringify({
        username: event.target.username.value,
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
        <form onSubmit={loginUser} className="flex flex-col">

          <div className="flex flex-col mb-8">
            <label htmlFor="username" className="text-white">Username</label>
            <input 
              id="username" 
              type="text"
              className="bg-gray-400 outline-none border-2 rounded p-1 focus:border-yellow-500" 
              required 
            />
          </div>

          <div className="flex flex-col mb-8 text-white">
            <label htmlFor="password">Password</label>
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

        <div className="mt-4">
          <ul>
            <li>
              <Link href="/register">
                <a>
                  Register here
                </a>
              </Link>
            </li>
          </ul>
        </div>

      </div>
      
    </div>
  </div>

  )
  
}


export default Login