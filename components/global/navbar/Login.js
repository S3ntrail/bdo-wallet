import { signIn, signOut, useSession, register } from 'next-auth/client'

import Link from 'next/link'

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
          className="cursor-pointer"
        >
          Sign in
        </a>

      <Link href="/register">
        <a> Create Account</a>
      </Link>
    </div>
  )
  
}

export default Login