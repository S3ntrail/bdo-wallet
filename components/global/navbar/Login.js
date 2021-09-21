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
    <div>
        <a 
          onClick={() => signIn()}
          className="cursor-pointer m-4"
        >
          <SignInButton
            title="Login"
          />
        </a>

      <Link href="/register">
        <RegisterButton
          title="Register"
        />
      </Link>
    </div>
  )
  
}

export default Login