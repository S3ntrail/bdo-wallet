import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/client'

import SignInButton from 'components/button/Login/login'
import RegisterButton from 'components/button/Register/register'

import {useState} from 'react'

const NavbarStatus = () => {

  const [session, loading] = useSession()

  console.log(session);

  if(session) {
    return (
      <div>
        <p>Signed in as {session.user.username}</p> 
        <a 
          onClick={ () => signOut()}
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
        onClick={ () => signIn()}
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

export default NavbarStatus