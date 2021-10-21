import db from '../../../lib/db'

import bcrypt from 'bcrypt'

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const options = {
  providers : [
    CredentialsProvider({
      id: 'credentials',
      name: "Account",

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
            console.log('data', data)
            const hash = data.pass

            bcrypt.compare(password, hash, function(err, result) {
              if (err) throw err

              if (!result) {
                return null
              }

            })

            const user = {
              id: data.id,
              wallet_id: data.wallet_id,
              username: data.username,
            }

            return user

          })
          .catch( error => {
            console.log('uwu no database for you' + error);
          })

        console.log('user', user)

        if (user) {
          console.log(user);
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
  // pages: {
  //   signIn: '/login',
  // }
}

export default (req,res) => NextAuth(req,res,options)

