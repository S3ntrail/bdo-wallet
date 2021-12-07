import Button from 'components/button/button'
import Message from 'components/popup/message'

import Input from 'components/form/input/input'
import Label from 'components/form/label/label'

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
            <Message message={result} delay="5000"/>
          </div>

          <form onSubmit={registerUser}>

            <div className="flex flex-col mb-8">
              <Label 
                for="username"
                title="username"
              />
              <Input 
                id="username"
                type="text"
                placeholder="username"
              />
            </div>

            <div className="flex flex-col mb-8">
              <Label 
                for="password"
                title="password"
              />
              <Input 
                id="password"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="flex flex-col mb-8">
              <Label 
                for="email"
                title="email"
              />
              <Input 
                id="email"
                type="email"
                placeholder="email address"
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