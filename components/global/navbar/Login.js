import { signIn, signOut, useSession, register } from 'next-auth/client'

import Link from 'next/link'

import SignInButton from 'components/button/Login/login'
import RegisterButton from 'components/button/Register/register'

const Login = () => {
  const [session, loading] = useSession()

  if(session) {
    return (
      <div>
        <p>{session.user.name}</p> 
        <a 
          onClick={() => signOut()}
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
        onClick={() => signIn()}
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