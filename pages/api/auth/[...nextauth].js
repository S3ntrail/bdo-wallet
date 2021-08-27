import db from '../../../lib/db'

import bcrypt from 'bcrypt'

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { v4 as uuidv4 } from 'uuid'

const saltRounds = 10

const options = {
  providers : [
    Providers.Credentials({
      id: 'credentials',
      name: "Account",

      credentials: {
        email: {label: "Email", type: "email", placeholder: "youremail@email.com"},
        password: {label: "Password", type: "password", placeholder: "password123", min: 8}
      },

      async authorize(credentials, req) {

        const email = req.body.email
        const password = req.body.password

        if(!password || password == null || !email || email == null) {
          return null
        }

        const hash = await bcrypt.hash(password, saltRounds)

        function existingUser(email) {
          return db.oneOrNone('SELECT email, password, userid FROM users WHERE email = ${email} LIMIT 1',{
            email 
          })
        }
      
        existingUser(email)
          .then( data => {
            password = data.password
      
            bcrypt.compare(password, hash, function(err, result) {
              if (result == true) {
                console.log('Password is true');
              } else {
                console.log('Password is false');
              }
            })
          })
          .catch( error => {
            console.log('uwu no database for you' + error);
          })

        const user = {
          email: email,
          name: email 
        }

        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
  ],
  // pages: {
  //   signIn: '/login',
  // },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  }
}

export default (req,res) => NextAuth(req,res,options)

