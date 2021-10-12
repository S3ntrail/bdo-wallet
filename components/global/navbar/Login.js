// import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'

import SignInButton from 'components/button/Login/login'
import RegisterButton from 'components/button/Register/register'

const Login = () => {

  // const {data: session, status} = useSession()

  // console.log(session, status);

  if("") {
    return (
      <div>
        <p>Signed in as {session.user.username}</p> 
        <a 
          className="cursor-pointer"
        >
          Sign out

        </a>
      </div>
    )
  }

  return(
    <div className="flex">
      <a 
        href="/login"
        className="cursor-pointer m-2"
      >
        <SignInButton
          title="Login"
        />
      </a>

      <a
        href="/register"
        className="cursor-pointer m-2"
      >
        <RegisterButton
          title="Register"
        />
      </a>
    </div>
  )
  
}

export default Login