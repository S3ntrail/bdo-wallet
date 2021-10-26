import db from '../../../lib/db'

import bcrypt from 'bcrypt'

import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers : [
    Providers.Credentials({
      name: "Credentials",

      credentials: {
        email: {label: "Email", type: "email", placeholder: "youremail@email.com"},
        password: {label: "Password", type: "password", placeholder: "password123"}
      },

      async authorize(credentials, req) {

        const email = req.body.email.toLowerCase()
        const password = req.body.password

        if(!password || password == null || !email || email == null) {
          return null
        }

        function existingUser(email) {
          return db.oneOrNone('SELECT email, pass, id, wallet_id, username FROM users WHERE email = ${email} LIMIT 1',{
            email 
          })
        }
      
        const user = await existingUser(email)
          .then( async (data) => {
            const hash = data.pass

            bcrypt.compare(password, hash, function(err, result) {
              if (err) throw err

              if (!result) {
                return null
              }

            })

            const user = {
              name: data.username,
              id: data.id,
              wallet_id: data.wallet_id
            }

            return user

          })
          .catch( error => {
            console.log('uwu no database for you' + error);
          })

        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    jwt: async (token, user) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      return Promise.resolve(token)   // ...here
    },
    session: async (session, user, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = user.user;
      return Promise.resolve(session)
    }
  }
  // pages: {
  //   signIn: '/login',
  // }
})

